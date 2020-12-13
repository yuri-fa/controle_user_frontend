import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserCreateComponent } from './views/user-create/user-create.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    component : UserCrudComponent
  },
  {
    path : "create-user",
    component : UserCreateComponent
  },
  {
    path : "update-user/:id",
    component : UserUpdateComponent
  },
  {
    path : "delete-user/:id",
    component : UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
