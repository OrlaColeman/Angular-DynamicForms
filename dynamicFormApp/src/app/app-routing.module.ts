import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputValuesComponent } from './forms/input-values/input-values.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { HomeComponent } from './forms/home/home.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"reactiveForms", component:ReactiveFormComponent},
  {path:"inputForms", component:InputValuesComponent},
  {path:"dynamicForms", component: DynamicFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
