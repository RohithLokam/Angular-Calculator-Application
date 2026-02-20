import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Employee {
  id: number;
  employeeName: string;
  email: string;
  phoneNumber: string;
  DOE: string;
  salary: number;
}

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  employeeForm!: FormGroup;
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  isEditMode: boolean = false;
  editEmployeeId: number | null = null;


  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(18), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      DOE: ['', [Validators.required]],
      salary: ['7999', [Validators.required, Validators.min(7999), Validators.max(1000000)]]
    });

    let storedData = localStorage.getItem('employees');
    this.employees = storedData ? JSON.parse(storedData) : [];
    this.filteredEmployees = [...this.employees];
  }

  empRegister() {

    if (this.employeeForm.invalid) return;

    const employeeData = this.employeeForm.value;

    let existingData = localStorage.getItem('employees');
    let employeesArray: Employee[] =
      existingData ? JSON.parse(existingData) : [];
    if (this.isEditMode && this.editEmployeeId !== null) {

      const index = employeesArray.findIndex(emp => emp.id === this.editEmployeeId);

      employeesArray[index] = {
        ...employeeData,
        id: this.editEmployeeId
      };

      this.isEditMode = false;
      this.editEmployeeId = null;

    } else {

      employeeData.id = employeesArray.length > 0
        ? Math.max(...employeesArray.map(emp => emp.id)) + 1
        : 1;

      employeesArray.push(employeeData);
    }

    localStorage.setItem('employees', JSON.stringify(employeesArray));

    this.employees = employeesArray;
    this.filteredEmployees = [...this.employees];

    this.employeeForm.reset();
  }



  onSearch() {
    const value = this.searchText.toLowerCase().trim();

    this.filteredEmployees = this.employees.filter(emp =>
      emp.employeeName.toLowerCase().includes(value) ||
      emp.email.toLowerCase().includes(value) ||
      emp.phoneNumber.includes(value)
    );
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);

    localStorage.setItem('employees', JSON.stringify(this.employees));

    this.filteredEmployees = [...this.employees];
        this.employeeForm.reset();

  }

  editEmployee(emp: Employee) {
    this.employeeForm.patchValue({
      employeeName: emp.employeeName,
      email: emp.email,
      phoneNumber: emp.phoneNumber,
      DOE: emp.DOE,
      salary: emp.salary
    });

    this.isEditMode = true;
    this.editEmployeeId = emp.id;
  }
}
