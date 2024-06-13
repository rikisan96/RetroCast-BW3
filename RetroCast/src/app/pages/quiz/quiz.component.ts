import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QuizService, Question } from '../../Service/quiz.service';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @ViewChild('fireworksContainer', { static: false }) fireworksContainer!: ElementRef;

  quizStarted = false;
  quizFinished = false;
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;
  selectedAnswer: string | undefined;
  score = 0;
  totalQuestions: number = 0;
  passThreshold = 0.7;  // Soglia di passaggio (70%)

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.totalQuestions = this.quizService.getQuestions().length;
  }

  startQuiz() {
    this.quizStarted = true;
    this.showQuestion();
  }

  showQuestion() {
    const questions = this.quizService.getQuestions();
    this.currentQuestion = questions[this.currentQuestionIndex];
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  nextQuestion() {
    if (!this.selectedAnswer) {
      alert('Seleziona una risposta!');
      return;
    }
    if (this.selectedAnswer === this.currentQuestion?.correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedAnswer = undefined;
    if (this.currentQuestionIndex === this.totalQuestions) {
      this.quizFinished = true;
      if (this.score / this.totalQuestions >= this.passThreshold) {
        this.launchFireworks();
      }
    } else {
      this.showQuestion();
    }
  }

  restartQuiz() {
    this.quizStarted = false;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.currentQuestion = undefined;
  }

  launchFireworks() {
    const fireworks = new Fireworks(this.fireworksContainer.nativeElement, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      explosion: 5,
      boundaries: {
        x: 50,
        y: 50,
        width: this.fireworksContainer.nativeElement.clientWidth,
        height: this.fireworksContainer.nativeElement.clientHeight
      },
      sound: {
        enabled: true,
        files: [
          'explosion0.mp3',
          'explosion1.mp3',
          'explosion2.mp3'
        ],
        volume: {
          min: 4,
          max: 8
        }
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      }
    });

    fireworks.start();
  }
}