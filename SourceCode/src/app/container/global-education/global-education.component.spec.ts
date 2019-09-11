import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEducationComponent } from './global-education.component';

describe('GlobalEducationComponent', () => {
  let component: GlobalEducationComponent;
  let fixture: ComponentFixture<GlobalEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
