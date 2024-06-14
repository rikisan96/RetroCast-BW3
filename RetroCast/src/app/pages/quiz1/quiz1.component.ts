import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, Quiz } from '../../Service/quiz.service';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})
export class Quiz1Component implements OnInit {
  quiz: Quiz | undefined;
  currentQuestionIndex = 0;
  selectedAnswer: string | undefined;
  score = 0;
  quizFinished = false;
  passMessage: string = '';

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('index')!;
    this.quiz = this.quizService.getQuiz(index);
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  nextQuestion() {
    if (!this.selectedAnswer) {
      alert('Seleziona una risposta!');
      return;
    }
    if (this.selectedAnswer === this.quiz?.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedAnswer = undefined;
    if (this.currentQuestionIndex === this.quiz?.questions.length) {
      this.quizFinished = true;
      this.checkScore();
    }
  }

  checkScore() {
    const scorePercentage = (this.score / this.quiz!.questions.length) * 100;
    if (scorePercentage >= 70) {
      this.passMessage = 'Congratulazioni! Hai superato il quiz!';
    } else {
      this.passMessage = 'Spiacente, non hai superato il quiz. Riprova!';
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = undefined;
    this.score = 0;
    this.quizFinished = false;
  }

  returnToQuizList() {
    this.router.navigate(['/quizlist']);
  }
}
