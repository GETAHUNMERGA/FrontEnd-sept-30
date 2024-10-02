import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class viewrequestService{
    http:HttpClient= inject(HttpClient);
    private apiUrl = `http://localhost:8080/api`;
    headers:HttpHeaders=new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
  
  //fetch 
  getBookById(id:string){
  //  return this.http.get<Book>('http://localhost:8080/api/getBooks/{id}',{headers:this.headers});
  return this.http.get(`${this.apiUrl}/getBook/${id}`);
  }
}