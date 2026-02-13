import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { InputTextModule } from 'primeng/inputtext';




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

  login(){
    this.user = this.service.login(this.userName, this.password);
    if (this.user) {
      alert('Login successful');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }

  }

  ngOnInit(): void {
  }

}
