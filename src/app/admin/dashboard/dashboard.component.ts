import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { FineServiceService } from 'src/app/fine-service.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalBooks = 0
  totalUsers = 0
  totalReturnedBooks = 0
  totalIssuedBooks = 0
  fine = 0
  totalCategories = 0
  constructor(
    private bookService : BookServiceService,
    private u : UserServiceService,
    private f : FineServiceService
  ) { }

  ngOnInit(): void {
    this.getTotalBooks()
    this.getTotalUsers()
    this.getTotalReturnedBooks()
    this.getTotalIssuedBooks()
    this.getFine()
    this.getTotalCategories()
  }
  getTotalBooks(){
    this.bookService.getTotalBooks().subscribe((res)=>{
      this.totalBooks = res
    })
  }
  getTotalUsers(){
    this.u.getTotalUsers().subscribe((res)=>{
      this.totalUsers = res
    })
  }
  getTotalReturnedBooks(){
    this.bookService.getTotalReturnedBooks().subscribe((res)=>{
      this.totalReturnedBooks = res
    })
  }
  getTotalIssuedBooks(){
    this.bookService.getTotalIssuedBooks().subscribe((res)=>{
      console.log(res)
      this.totalIssuedBooks = res
    })
  }

  getFine(){
    this.f.getFine().subscribe((res)=>{
      this.fine = res
    })
  }
  getTotalCategories(){
    this.bookService.getTotalCategories().subscribe((res)=>{
      this.totalCategories = res
      console.log(res)
    })
  }

}
