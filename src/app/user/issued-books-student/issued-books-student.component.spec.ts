import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBooksStudentComponent } from './issued-books-student.component';

describe('IssuedBooksStudentComponent', () => {
  let component: IssuedBooksStudentComponent;
  let fixture: ComponentFixture<IssuedBooksStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedBooksStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBooksStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
