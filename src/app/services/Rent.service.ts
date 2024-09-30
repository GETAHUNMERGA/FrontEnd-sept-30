import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Rent } from "../models/Rent";

@Injectable({providedIn:'root'})
export class RentService{
  http:HttpClient= inject(HttpClient);
  private apiUrl = `http://localhost:8080/api`;
  headers:HttpHeaders=new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)

//fetch 
getBooks(){
  return this.http.get<any>("http://localhost:8080/api/getBooks");
}
  //Method to fetch book unrented  data

  fetchRents(){
    return this.http.get<Rent>(`${this.apiUrl}/getClients`,{headers:this.headers})
  }

  //Method to add Rent data to the database table
  addRent(){

  }

  // Method to remove Rent data from database table
  removeRent(){

  }

  //Method to search a Rent from the database table 
  searchRent(){

  }

  //Method to update Rent data 
  updateRent(){

  }
}