import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { IssueBookComponent } from './admin/issue-book/issue-book.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageIssuedBooksComponent } from './admin/manage-issued-books/manage-issued-books.component';
import { RequestedBooksComponent } from './admin/requested-books/requested-books.component';
import { FineComponent } from './admin/fine/fine.component';
import { IssuedBooksStudentComponent } from './user/issued-books-student/issued-books-student.component';
import { UserPortalComponent } from './user/user-portal/user-portal.component';

const routes: Routes = [
  {path: '', redirectTo: 'login/student', pathMatch: 'full'},
  {path: 'login/student', component: LoginComponent , data : {title: 'Student Login Form'}},
  {path: 'login/admin', component: LoginComponent , data : {title: 'Admin Login Form'}},
  {path: 'admin' , redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent ,children:[
    {path: 'dashboard', component: DashboardComponent },
    {path:"add-book", component: AddBookComponent },
    {path:"add-category", component: AddCategoryComponent },
    {path:"issue-book", component: IssueBookComponent },
    {path:"manage-users", component: ManageUsersComponent },
    {path:"manage-issued-books", component: ManageIssuedBooksComponent },
    {path:"requested-books", component: RequestedBooksComponent },
    {path:"fine", component:FineComponent}

  ]},
 {path:"user/user-portal",component:UserPortalComponent,children:[
  {path:"issued-books-student", component: IssuedBooksStudentComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
