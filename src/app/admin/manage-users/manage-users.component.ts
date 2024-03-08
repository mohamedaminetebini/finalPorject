import { Component, OnInit } from '@angular/core';
import { User, UserList } from 'src/app/types/userType';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users : User[]=[]
  constructor(
    private u : UserServiceService
  ) { }

  ngOnInit(): void {
    this.u.getUsers().subscribe((res:UserList)=>{
      this.users = res.users
    })
  }

  onEdit(user:User){
    this.u.modifyStatus(user).subscribe((res)=>{
      if(res){
        this.users[this.users.indexOf(user)].status = user.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE'
        console.log(res)
      }

    })
  }

}
