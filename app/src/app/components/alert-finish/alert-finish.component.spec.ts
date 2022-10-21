import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFinishComponent } from './alert-finish.component';

describe('AlertFinishComponent', () => {
  let component: AlertFinishComponent;
  let fixture: ComponentFixture<AlertFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFinishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
