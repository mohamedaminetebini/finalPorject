import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title : string = ""
  code : string = ""
  entredCode : string = ""
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  verifyCode(providedCode : string , code : string):Boolean{
    if(providedCode === code){
      alert("Code Verified")
      return true
    }else{
      alert("Code Not Verified")
      return false
    }
  }

  submit(e:any){

    if(this.verifyCode(this.entredCode , this.code)){
      this.generateVerificationCode()
    }
  }
  generateVerificationCode(){
 this.code = Math.floor(100000 + Math.random() * 900000).toString();
  }
  ngOnInit(): void {
    this.generateVerificationCode()
    this.title = this.activatedRoute.snapshot.data['title']
  }

}
