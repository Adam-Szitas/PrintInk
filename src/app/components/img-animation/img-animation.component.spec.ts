import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAnimationComponent } from './img-animation.component';

describe('ImgAnimationComponent', () => {
  let component: ImgAnimationComponent;
  let fixture: ComponentFixture<ImgAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
