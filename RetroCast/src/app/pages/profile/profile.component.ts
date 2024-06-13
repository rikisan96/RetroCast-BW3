import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUser } from '../../Models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: iUser = {
    email: '',
    password: '',
    region: '',
    firstName: '',
    lastName: '',
    username: '',
    age: undefined,
    profileImageUrl: '',
    'game-list': [],
    id: 0
  };
  isEditing = false;
  showVerificationModal = false;
  verificationCode = '';
  correctVerificationCode = '10';  // Codice di verifica predefinito
  selectedImage: string | ArrayBuffer | null = null;
  showModal: boolean = false;
  predefinedImages: string[] = [
    '../../assets/imgs/profile/mario.png',
    '../../assets/imgs/profile/bowser.jpg',
    '../../assets/imgs/profile/mario1.jpg',
    '../../assets/imgs/profile/toad.png'
  ];

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe({
      next: user => {
        if (user) {
          this.user = user;
        }
      },
      error: err => {
        console.error('Failed to load user', err);
      }
    });
  }

  confirmEdit() {
    if (confirm('Are you sure you want to edit your profile?')) {
      this.showVerificationModal = true;
    }
  }

  confirmDelete() {
    if (confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
      this.deleteProfile();
    }
  }

  verifyCode() {
    if (this.verificationCode === this.correctVerificationCode) {
      this.isEditing = true;
      this.closeVerificationModal();
    } else {
      alert('Incorrect verification code. Access denied.');
      this.closeVerificationModal();  // Chiudi la modal in caso di errore
    }
  }

  closeVerificationModal() {
    this.showVerificationModal = false;
    this.verificationCode = '';
  }

  updateProfile() {
    // Verifica che tutti i campi obbligatori siano presenti
    if (!this.user.email) {
      console.error('Missing required field: email');
      alert('Email is required.');
      return;
    }
    if (!this.user.password) {
      console.error('Missing required field: password');
      alert('Password is required.');
      return;
    }
    if (!this.user.region) {
      console.error('Missing required field: region');
      alert('Region is required.');
      return;
    }
    if (!this.user.firstName) {
      console.error('Missing required field: firstName');
      alert('First Name is required.');
      return;
    }
    if (!this.user.lastName) {
      console.error('Missing required field: lastName');
      alert('Last Name is required.');
      return;
    }
    if (!this.user.username) {
      console.error('Missing required field: username');
      alert('Username is required.');
      return;
    }

    console.log('Updating profile with data:', this.user);  // Log dei dati inviati per il debugging
    this.authSvc.updateUser(this.user).subscribe({
      next: () => {
        alert('Profile updated successfully');
        this.isEditing = false;  // Imposta isEditing a false per tornare alla modalità di visualizzazione
      },
      error: error => {
        console.error('Update failed', error);  // Log degli errori
        alert('Failed to update profile');
      }
    });
  }

  deleteProfile() {
    this.authSvc.deleteUser(this.user.id).subscribe({
      next: () => {
        alert('Profile deleted successfully');
        this.router.navigate(['/']);  // Redirige alla home page o altra pagina appropriata
      },
      error: error => {
        console.error('Delete failed', error);  // Log degli errori
        alert('Failed to delete profile');
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.user.profileImageUrl = this.selectedImage as string;
      };
      reader.readAsDataURL(file);
    }
  }

  openProfileModal() {
    this.showModal = true;
  }

  closeProfileModal() {
    this.showModal = false;
  }

  selectPredefinedImage(imageUrl: string) {
    this.user.profileImageUrl = imageUrl;
    this.selectedImage = null;
    this.showModal = false;
  }
}
