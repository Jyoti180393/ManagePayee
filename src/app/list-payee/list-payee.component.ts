import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PayeeService} from '../payee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-payee',
  templateUrl: './list-payee.component.html',
  styleUrls: ['./list-payee.component.css']
})
export class ListPayeeComponent implements OnInit {
  allPayee:any = {};
 userId:string;

  constructor(
    private httpClient: HttpClient,
    private payeeService: PayeeService,
    private router: Router
  ) { }
 
  deleteUrl="http://13.233.166.249:9090/beneficiaryapp/beneficiary/deletePayee/?payeeeId=12";
  updateUrl="http://13.233.166.249:9090/beneficiaryapp/beneficiary/getPayeeById?payeeId="



  ngOnInit()   {
    
    this.payeeService.getPayee("http://13.233.166.249:9090/beneficiaryapp/beneficiary/getPayeeList").subscribe((res) => {
      console.log(res);
      this.allPayee = res;
      // this.userId=res.payeeId;

    })
    }

    updatePayee(){
    this.router.navigate(['/updatepayee']); 
      
    }

    deletePayee(post){

      this.httpClient.delete(this.deleteUrl + '/' + post.id)  
    .subscribe(response => {  
      let index = this.allPayee.payeeList.indexOf(post);  
      this.allPayee.payeeList.slipce(index, 1);  
    });
    this.router.navigate(['/confirmOTP']); 
       
    }

    // deletePayee(uId:userId){
    //   this.payeeService.deletePayee("").subscribe((res)=>
    //   {
    //     console.log(res);
    //   })
}
