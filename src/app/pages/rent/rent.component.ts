import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RentService } from '../../services/Rent.service';
import { TestDirectiveDirective } from '../../test-directive.directive';
export class ChildClass {
  name:string='test'

}
@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [TestDirectiveDirective,CommonModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
//export class RentComponent extends ChildClass implements OnInit
export class RentComponent {
  rentService:RentService=inject(RentService);
  getUnrentedBooks:[]=[];
  query: string = '';
  unrentedBooks = [
    { title: 'Book One' },
    { title: 'Book Two' },
    { title: 'Book Three' },
    // Add more books as needed
  ];

getAllUnrentedBooks():any{
 // this.getAllUnrentedBooks=this.rentService.getBooks();
 this.rentService.getBooks().subscribe((response)=>{
  this.getAllUnrentedBooks=response.data;
 })
  //console.log("unrented Books are"+this.getAllUnrentedBooks);
  return this.getAllUnrentedBooks;
}

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


