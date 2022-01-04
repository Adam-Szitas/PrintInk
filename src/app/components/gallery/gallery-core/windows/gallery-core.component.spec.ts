import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCoreComponent } from './gallery-core.component';

describe('GalleryCoreComponent', () => {
  let component: GalleryCoreComponent;
  let fixture: ComponentFixture<GalleryCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
