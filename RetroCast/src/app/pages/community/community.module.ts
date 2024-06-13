import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommunityComponent } from './community.component';
import { CommunityRoutingModule } from './community-routing.module';

@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
