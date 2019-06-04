import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PayeeService {

  constructor(private httpClient: HttpClient) {  }

  
 
  createPayee(payee:any) {
    console.log(payee);
    const url = "https://reqres.in/api/users/";
  
    return this.httpClient.post( url , payee);
  }

  getPayee(url){
    return this.httpClient.get(url); 
  }

  // deletePayee(deleteUrl){
   
  //   return this.httpClient.delete(deleteUrl)
  // }
}
