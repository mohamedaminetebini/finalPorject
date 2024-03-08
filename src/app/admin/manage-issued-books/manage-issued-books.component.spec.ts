import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIssuedBooksComponent } from './manage-issued-books.component';

describe('ManageIssuedBooksComponent', () => {
  let component: ManageIssuedBooksComponent;
  let fixture: ComponentFixture<ManageIssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageIssuedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
