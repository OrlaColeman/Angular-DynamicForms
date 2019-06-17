import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailFormComponent } from './forms/email-form/email-form.component';

const routes: Routes = [
  {path:"email", component:EmailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
