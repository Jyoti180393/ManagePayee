import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PayeeModel} from '../payeeModel'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  
 
  model:any={};
  accountNo:string;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  

  onAdd(){
    console.log(this.model);
    // this.httpClient.createPayee().subscribe((data: model) => {
    //   this.model = data;
    // });
  
    this.accountNo=this.model.payeeAccountNo;
    this.router.navigate(['/confirmOTP']);  

    //  if(this.showOtpMessage)
    //  this.Otp=prompt('Enter OTP');
     
  }

}
