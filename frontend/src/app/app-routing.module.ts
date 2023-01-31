import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userTypeList', component: UserTypeListComponent },
  { path: 'newUser', component: UserFormComponent },
  { path: 'newUserType', component: UserTypeFormComponent },
  { path: 'updateUser/:id', component: UserFormComponent },
  { path: 'updateUserType/:id', component: UserTypeFormComponent },
  { path: 'viewUser/:id', component: ViewUserComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
