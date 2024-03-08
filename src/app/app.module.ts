import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import {ToastModule} from 'primeng/toast';
import { IssueBookComponent } from './admin/issue-book/issue-book.component';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { TagModule } from 'primeng/tag';
import { ManageIssuedBooksComponent } from './admin/manage-issued-books/manage-issued-books.component';
import { RequestedBooksComponent } from './admin/requested-books/requested-books.component';
import { FineComponent } from './admin/fine/fine.component';
import { IssuedBooksStudentComponent } from './user/issued-books-student/issued-books-student.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { UserPortalComponent } from './user/user-portal/user-portal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
    ,AdminNavComponent, AdminComponent, AddBookComponent, AddCategoryComponent, IssueBookComponent, ManageUsersComponent, ManageIssuedBooksComponent, RequestedBooksComponent, FineComponent, IssuedBooksStudentComponent, UserNavComponent, UserPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
DropdownModule,
BrowserAnimationsModule,
InputTextareaModule,
ReactiveFormsModule,
HttpClientModule,
ToastModule,
CalendarModule,
TableModule,
TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
