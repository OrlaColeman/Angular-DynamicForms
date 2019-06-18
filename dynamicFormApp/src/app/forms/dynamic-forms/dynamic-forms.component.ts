import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  form_template = [
    {
      "id": 1,
      "type":"select",
      "options":[1, 2 , 3, 4 ,5],
      "question": "rate your experience today"
    },
    {
      "id": 2,
      "type":"select",
      "options":[1, 2 , 3, 4 ,5],
      "question": "rate your experience out of 5 today"
    }
  ]
 
  //reactive forms - creating the form but using the information from the form_template created instead of insantiating each form controller
  myFormGroup:FormGroup;
  formTemplate:any = this.form_template; 
  answers: any = {}

  constructor() {}    
  
  ngOnInit() {
    let group={}    

    //for each label create a new form controller 
    this.form_template.forEach(input_template=>{
      group[input_template.question]=new FormControl(''); 
    })

    this.myFormGroup = new FormGroup(group);
  }
  
  onSubmit(){ 
    // console.log(this.myFormGroup.value);
  }
  changeIndex(index: number, form_elem: any){
    console.log(form_elem)
    console.log("function:" + index);
  }
}
