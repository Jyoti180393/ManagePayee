import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayeeService } from 'src/app/payee.service';

@Component({
  selector: 'app-update-payee',
  templateUrl: './update-payee.component.html',
  styleUrls: ['./update-payee.component.css']
})
export class UpdatePayeeComponent implements OnInit {
  allPayee:any = {};
  constructor(
    private httpClient: HttpClient,
    private payeeService: PayeeService,
    
  ) { }

  ngOnInit() {
    this.payeeService.getPayee("http://13.233.166.249:9090/beneficiaryapp/beneficiary/getPayeeById?payeeId="+2).subscribe((res) => {
      console.log("this is update");
      console.log(res);
      this.allPayee = res;
      // this.userId=res.payeeId;

    })
  }


}
