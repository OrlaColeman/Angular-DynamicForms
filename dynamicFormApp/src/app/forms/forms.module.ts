import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValuesComponent } from './input-values/input-values.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ForLoopTestComponent } from './for-loop-test/for-loop-test.component';

@NgModule({
  declarations: [InputValuesComponent, ReactiveFormComponent, HomeComponent, DynamicFormsComponent, ForLoopTestComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
