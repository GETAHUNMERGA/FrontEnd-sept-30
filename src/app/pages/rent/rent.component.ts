import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RentService } from '../../services/Rent.service';
import { TestDirectiveDirective } from '../../test-directive.directive';
export class ChildClass {
  name:string='test'

}
@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [TestDirectiveDirective,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
//export class RentComponent extends ChildClass implements OnInit
export class RentComponent implements OnInit{
  rentService:RentService=inject(RentService);
  getUnrentedBooks:any;
  //datePipe:inject(DatePipe);
  //getAllUnrentedBooks:any;
  query: string = '';
  index:number=0;
  succesMessage:any;
  unrentedBooks = [
    { title: 'Book One' },
    { title: 'Book Two' },
    { title: 'Book Three' },
    // Add more books as needed
  ];
ngOnInit(): void {
  this.rentService.getBooks().subscribe((response)=>{
    this.getUnrentedBooks=response;
    console.log("books"+this.getUnrentedBooks);
   })
 
}
http:HttpClient= inject(HttpClient);

  private apiUrl = `http://localhost:8080/api`;
  
  headers:HttpHeaders=new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
requestRent(id:number):void{
  const modals=document.getElementById("modal");
  if(modals!=null){
    modals.style.display="block";
  }

//rents:Rent;
//const date = this.datePipe.transform(new Date(), 'yyyy-MM-ddThh:mm:ss.SSSZ');
const rent={
  bookId: id, clientId: 2, rentDate: new Date("02-09-06").toISOString, dueDate: new Date("02-08-09").toISOString, returnDate: new Date("02-6-08").toISOString, rentAmount: 100, status: "Rented"
};
this.http.post(`${this.apiUrl}/rentBook`,rent,{ responseType:'text'}).subscribe((response)=>{
  this.succesMessage=response;
  if(this.succesMessage){
    console.log("The Book Is Rented Successfully"+this.succesMessage);
  }
})
 
}
  //close modal
  modalCloseByDocument(){
    const modals=document.getElementById("modal");
    if(modals!=null){
      modals.style.display="none";
  }
}
// getAllUnrentedBooks(){
//  // this.getAllUnrentedBooks=this.rentService.getBooks();
//  this.rentService.getBooks().subscribe(response=>{
//   this.getAllUnrentedBooks=response;
//   console.log("books"+this.getAllUnrentedBooks);
//  })
//   //console.log("unrented Books are"+this.getAllUnrentedBooks);
//   return this.getAllUnrentedBooks;
// }

  //those done by shikur
//   getAllRents(){
//     this.rentService.fetchRents().subscribe((data)=>{
//       console.log(data)
//     })
//   }
//   ngOnInit(): void {
//    this.getAllRents()
//   }

// placeholder:string='Enter here...';
// togglePlaceHolder(){
//   this.placeholder='Enter your name here';
// }
 

}


