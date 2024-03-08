import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookServiceService } from 'src/app/book-service.service';
import { CategoryService } from 'src/app/category.service';
import {MessageService} from 'primeng/api';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [MessageService]
})
export class AddBookComponent implements OnInit {
selectedCat : string = ""
cats : any
form: FormGroup = new FormGroup({
  title: new FormControl("",[Validators.required,Validators.minLength(3)]),
  author: new FormControl("",[Validators.required,Validators.minLength(3)]),
  category: new FormControl("",[Validators.required]),
  price: new FormControl("",[Validators.required,Validators.minLength(3)]),
  isbn: new FormControl("",[Validators.required]),
  quantity: new FormControl("",[Validators.required,Validators.minLength(1)]),
  description: new FormControl("",[Validators.required,Validators.minLength(3)]),
})

  constructor(
    private catService : CategoryService,
    private b : BookServiceService,
    private messageService: MessageService
  ) {

  }
onSubmit(){
if(this.form.valid){
  const book = {...this.form.value,noCopies : this.form.value.quantity,category : this.form.value.category.code}
this.b.addBook(book).subscribe((res)=>{
  if(res){
    this.form.reset()
    this.messageService.add({severity:'success', summary: 'Success', detail: res.message});
  }
})
}else{
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Please fill all the fields'});
}

}
  ngOnInit(): void {
    this.catService.getCategories().subscribe((res)=>{
      console.log(res)
      this.cats = [{name: 'Select Category', code: ''},...res]
    })
  }

}
