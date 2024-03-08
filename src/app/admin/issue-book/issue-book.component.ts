
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookServiceService } from 'src/app/book-service.service';
@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css'],
  providers: [MessageService]
})
export class IssueBookComponent implements OnInit {
title : string = "title"
  form : FormGroup = new FormGroup({
    book: new FormControl("",[Validators.required,Validators.minLength(3)]),
    user: new FormControl("",[Validators.required,Validators.minLength(3)]),
    dueDate: new FormControl("",[Validators.required,Validators.minLength(3)]),
  })
  constructor(
    private messageService: MessageService,
    private b : BookServiceService
    ) { }
onSubmit(){
  if(this.form.valid){
      console.log(this.form.value)
    this.b.issueBook(this.form.value).subscribe((res)=>{
      if(res){
        this.form.reset()
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Book Issued Successfully'});
      }
    })

  }else{
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Please fill all the fields'});
  }
}
onChange(event:any){
  console.log(event.target.value)
  this.b.searchBooks(event.target.value).subscribe((res)=>{
  this.title = res.title
  })

}
  ngOnInit(): void {
  }

}
