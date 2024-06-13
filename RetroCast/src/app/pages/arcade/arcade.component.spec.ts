import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeComponent } from './arcade.component';

describe('ArcadeComponent', () => {
  let component: ArcadeComponent;
  let fixture: ComponentFixture<ArcadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArcadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArcadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
