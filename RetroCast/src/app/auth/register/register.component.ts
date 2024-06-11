import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  newUser: Partial<iUser> = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    username: '',
    age: undefined, // Inizializza age con undefined
    profileImageUrl: '../../assets/imgs/profile/mario1.jpg'
  };
  confirmPassword: string = '';
  securityAnswer: string = ''; // Aggiungi questa linea
  selectedImage: string | ArrayBuffer | null = null;
  showModal: boolean = false;
  predefinedImages: string[] = [
    '../../assets/imgs/profile/mario.png',
    '../../assets/imgs/profile/bowser.jpg',
    '../../assets/imgs/profile/mario1.jpg',
    '../../assets/imgs/profile/toad.png'

  ];

  constructor(private authSvc: AuthService) {}

  register() {
    if (this.newUser.password !== this.confirmPassword) {
      alert('Le password non coincidono');
      return;
    }
    if (this.securityAnswer !== '7') { // Verifica la risposta alla domanda di sicurezza
      alert('Risposta alla domanda di verifica errata');
      return;
    }
    this.authSvc.register(this.newUser).subscribe(() => {
      // Handle successful registration
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
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
    this.newUser.profileImageUrl = imageUrl;
    this.selectedImage = null;
    this.showModal = false;
  }
}
