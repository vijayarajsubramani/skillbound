import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/google-auth-service.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[FirebaseService]
})
export class UserLoginComponent implements OnInit {

  constructor(public auth:FirebaseService) { 
    
  }

  ngOnInit(): void {
    
  }

}

