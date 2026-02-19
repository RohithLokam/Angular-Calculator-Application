import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { PasswordModule } from 'primeng/password';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  
  constructor(private router:Router,private service: ServiceService) { }

  userName: string='';
  password: string='';
  user: boolean = false;

  login(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.user = this.service.login(form.value.userName, form.value.password);
    if (this.user) {
      alert('Login successful');
      this.router.navigate(['/home']);
    } else {
      form.value.userName = '';
      form.value.password = '';
      alert('Invalid credentials');
    }

  }

  ngOnInit(): void {

    let arr: number[]=[1,2,3];
    arr[1]=4;
    const arr1: number[]=[2,3,4,5];
    arr = arr1;
    console.log(arr);
    
  }

}
