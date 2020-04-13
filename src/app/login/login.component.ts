import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any;

  constructor(private as: AuthService) { }

  // ngOnInit() {
  // }

  async ngOnInit() {
    this.user = await this.as.getUser$
  }
  async logout() {
    this.as.logout();
  } 

}
