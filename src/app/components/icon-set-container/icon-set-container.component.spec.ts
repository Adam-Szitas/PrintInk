import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSetContainerComponent } from './icon-set-container.component';

describe('IconSetContainerComponent', () => {
  let component: IconSetContainerComponent;
  let fixture: ComponentFixture<IconSetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSetContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
