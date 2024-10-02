import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { viewrequestService } from '../../services/viewrequest.service';

@Component({
  selector: 'app-viewrequest',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './viewrequest.component.html',
  styleUrl: './viewrequest.component.css'
})
export class ViewrequestComponent implements OnInit {
  bookData:any;
  id:string |null ='';
constructor(private route_param:ActivatedRoute,private http:HttpClient, private view:viewrequestService){}

  ngOnInit(): void {
    this.id=this.route_param.snapshot.paramMap.get('id');
    const parameterId=this.id;
    console.log("The passed id was "+this.id);
    //check up if id exists
    if(this.id){
      this.view.getBookById(this.id).subscribe((response)=>{
        this.bookData=response;
        console.log("book with specified id was:"+this.bookData.title);
      });
    }

    // throw new Error('Method not implemented.');
  }


}
