import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule
  ]
})
export class QuizModule { }
