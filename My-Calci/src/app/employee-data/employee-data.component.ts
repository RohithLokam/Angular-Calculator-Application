import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  employeeForm! : FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeName: ['',Validators.required,Validators.minLength(3),Validators.maxLength(18)],
      email: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      DOE: ['',Validators.required],
      salary: ['7999',Validators.required]
    });
  }

  empRegister(){
    console.log(this.employeeForm.value);
  }

}
