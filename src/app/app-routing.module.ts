import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp-add-edit/emp.component';
import { PostComponent } from './posts/post.component';

const routes: Routes = [
  { path: '', component: EmpComponent },
  { path: 'empployees', component: EmpComponent },
  { path: 'posts', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
