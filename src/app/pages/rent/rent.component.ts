import { CommonModule } from '@angular/common';
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
  //getAllUnrentedBooks:any;
  query: string = '';
  index:number=0;
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


