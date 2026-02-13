import { Injectable } from '@angular/core';


interface user {
  userName: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  userData: user[] = [
    { userName: 'rohith', password: 'Rohith@123' },
    { userName: 'admin',  password: 'Admin@123' }
  ];
  password: string = '';
  userName: string = '';
  userLogin: boolean = false;
  private hasResult = false;

  constructor() { }

 

  login(userName: string, password: string): boolean {
    for (let i = 0; i < this.userData.length; i++) {
      const u = this.userData[i];
      if (u.userName === userName && u.password === password) {
        this.userLogin = true;
        localStorage.setItem("userLogin",'true');
        return true;
      }
    }
    localStorage.setItem('userLogin', 'false');
    return false;
  }


  Islogin(): boolean{
    const value = localStorage.getItem('userLogin');
    this.userLogin = (value === 'true');
    return this.userLogin;
  }

  setResultPresent(flag: boolean) {
    localStorage.setItem('hasResult', 'true');
  }

  IsResult(): boolean {
    const value = localStorage.getItem('hasResult');
    this.hasResult = (value === 'true');
    return this.hasResult;
  }


}
