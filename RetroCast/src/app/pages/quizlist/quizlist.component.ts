import { Component, OnInit } from '@angular/core';
import { QuizService, Quiz } from '../../Service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.scss']
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];
  filteredQuizzes: Quiz[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.filteredQuizzes = this.quizzes;
  }

  startQuiz(index: number) {
    this.router.navigate([`/quiz/${index}`]);
  }

  filterQuizzes(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredQuizzes = this.quizzes.filter(quiz => quiz.title.toLowerCase().includes(query));
  }
}