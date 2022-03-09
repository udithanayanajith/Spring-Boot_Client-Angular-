import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
