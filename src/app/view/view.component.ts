import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  items:any;

  

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  let response=this.http.get("http://localhost:8080/api/v1/employees");
      response.subscribe((data)=>{
        this.items=data
        console.log(data,"data");
    
    },err=>{
      alert("Error while fectching data");
      console.log(err);
    })

  }
  deleteEmp(empID:any){
    let deleteEmp=this.http.delete("http://localhost:8080/api/v1/employees/"+empID).subscribe(deleteEmp => {
      alert("Succussfully Deleted : ID is"+ empID);
      this.router.navigate(['']);
    }, err => {
      alert("Data not Deleted");
      console.log(err);
    })


  }

}
