import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
 
  // profileForm = new FormGroup({
  //   email: new FormControl(''),
  //   username: new FormControl(''),
  //   addressForm: new FormGroup({
  //     street: new FormControl(''),
  //     county: new FormControl('')
  //   }),
  // });
  
profileForm = this.fb.group({
username:['', Validators.required],
email:[''],
addressForm: this.fb.group({
  street: [''],
  county:['']
})
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }
  updateProfile(){
    this.profileForm.patchValue({
      username: this.profileForm.value,
      email: this.profileForm.value,
      street: this.profileForm.value,
      county: this.profileForm.value 
     });
  }

}
