import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 form : FormGroup = new FormGroup({
  category : new FormControl(""),
  description : new FormControl(""),
  status : new FormControl("")
 })
  constructor(
    private catService : CategoryService
  ) { }

  ngOnInit(): void {
   
  }
onSubmit(){
  console.log(this.form.value)

  this.catService.addCategory(this.form.value).subscribe((res)=>{
    console.log(res)
  })
}
}
