import { Component, OnInit } from '@angular/core';
import { GoogleAuthServiceService } from '../service/google-auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers:[GoogleAuthServiceService]
})
export class UserLoginComponent implements OnInit {

  constructor(public auth:GoogleAuthServiceService) { 
    
  }

  ngOnInit(): void {
    
  }

}
