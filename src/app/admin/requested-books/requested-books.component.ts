import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {

  requestedBooks : any[] = []

  constructor(
    private b: BookServiceService
  ) { }

  ngOnInit(): void {
    this.LoadRequestedBooks()
  }

  LoadRequestedBooks(){
    this.b.getNonIssuedBooks().subscribe((res)=>{
      this.requestedBooks = res.body
    })
  }
  onEdit(issuedBook : any){
  this.b.IssueBook(issuedBook).subscribe((res)=>{
    this.requestedBooks.splice(this.requestedBooks.indexOf(issuedBook),1)
  })
  }
}
