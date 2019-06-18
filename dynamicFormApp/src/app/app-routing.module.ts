import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputValuesComponent } from './forms/input-values/input-values.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { HomeComponent } from './forms/home/home.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';
import { ForLoopTestComponent } from './forms/for-loop-test/for-loop-test.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"reactiveForms", component:ReactiveFormComponent},
  {path:"inputForms", component:InputValuesComponent},
  {path:"dynamicForms", component: DynamicFormsComponent},
  {path:"forLoop", component: ForLoopTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
