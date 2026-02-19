import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDataComponent } from './employee-data/employee-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    ResultsComponent,
    PagenotfoundComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
