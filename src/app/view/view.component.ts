import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  items: any;
  private sendEditdata: any;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Get all details
    let response = this.http.get("http://localhost:8080/api/v1/employees");
    response.subscribe((data) => {
      this.items = data
      console.log(data, "data");

    }, err => {
      alert("Error while fectching data");
      console.log(err);
    });


  }

  //delete by id
  deleteEmp(empID: any) {
    let deleteEmp = this.http.delete("http://localhost:8080/api/v1/employees/" + empID).subscribe(deleteEmp => {
      alert("Succussfully Deleted : ID is" + empID);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = "reload";
      this.router.navigate(['']);
    }, err => {
      alert("Data not Deleted");
      console.log(err);
    })


  }
//send data to reg from to load data
  editEmp(editData: any) {
    this.router.navigate(['reg'], { state: { editData } });
  }

}
