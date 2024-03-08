import { Component, OnInit } from '@angular/core';
import { FineServiceService } from 'src/app/fine-service.service';

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.css']
})
export class FineComponent implements OnInit {
fine= ""
  constructor(
    private f : FineServiceService
  ) { }

  ngOnInit(): void {
    this.getFine()
  }
setFine(fine : any){
  if(fine!==""){
    this.f.setTfine(fine).subscribe((res)=>{
      console.log(res)
    })
  }else{
    alert("Please enter fine")
  }
}

getFine(){
  this.f.getFine().subscribe((res)=>{
    console.log(res)
    this.fine = res
  })
}
}
