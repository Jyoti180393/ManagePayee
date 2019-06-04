import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayeeService } from 'src/app/payee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-payee',
  templateUrl: './update-payee.component.html',
  styleUrls: ['./update-payee.component.css']
})
export class UpdatePayeeComponent implements OnInit {
  allPayee:any = {};
  accNo:string;
  ifscCode:string;
  nickName:string;
  constructor(
    private httpClient: HttpClient,
    private payeeService: PayeeService,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.payeeService.getPayee("http://13.233.166.249:9090/beneficiaryapp/beneficiary/getPayeeById?payeeId="+2).subscribe((res) => {
      console.log("this is update");
      console.log(res);
      this.allPayee = res;
      console.log(this.allPayee.accountNo , "sdhshgdjfg");

      this.accNo = this.allPayee.accountNo;
      this.ifscCode = this.allPayee.ifscCode;
      this.nickName = this.allPayee.nickName;
      // this.userId=res.payeeId;

    })
  }

  onUpdate(){
    this.router.navigate(['/confirmOTP']);  
  }


}
