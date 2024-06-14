import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quizlist.component';
import { QuizlistRoutingModule } from './quizlist-routing.module';

@NgModule({
  declarations: [QuizListComponent],
  imports: [
    CommonModule,
    QuizlistRoutingModule
  ]
})
export class QuizlistModule { }
