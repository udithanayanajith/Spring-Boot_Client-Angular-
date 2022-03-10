import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  items:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  let response=this.http.get("http://localhost:8080/api/v1/employees");
      response.subscribe((data)=>{
        this.items=data
        console.log(data,"data");
    
    })

  }

}
