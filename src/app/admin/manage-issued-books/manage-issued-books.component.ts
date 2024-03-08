import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { IssuedBook } from 'src/app/types/bookType';

@Component({
  selector: 'app-manage-issued-books',
  templateUrl: './manage-issued-books.component.html',
  styleUrls: ['./manage-issued-books.component.css']
})
export class ManageIssuedBooksComponent implements OnInit {

  issuedBooks : IssuedBook[] = []
  constructor(
    private b: BookServiceService
  ) { }

  ngOnInit(): void {
    this.LoadIssuedBooks()
  }

  LoadIssuedBooks(){
    this.b.getIssuedBooks().subscribe( (response: HttpResponse<any>) => {

     this.issuedBooks = response.body

    },
    (error:HttpErrorResponse) => {
      console.log(error.error)
    })
  }
  onEdit(issuedBook : IssuedBook){
    this.b.updateIssueReturn(issuedBook.issuedBookId).subscribe( (response: HttpResponse<any>) => {

      this.issuedBooks[this.issuedBooks.indexOf(issuedBook)].returned = !issuedBook.returned
    })
  }
}
