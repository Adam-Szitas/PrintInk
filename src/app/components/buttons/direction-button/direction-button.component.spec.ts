import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionButtonComponent } from './direction-button.component';

describe('DirectionButtonComponent', () => {
  let component: DirectionButtonComponent;
  let fixture: ComponentFixture<DirectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
