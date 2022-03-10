import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  regForm:any= FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: [''],  contact: [''],address: ['']
    })
  }

  //methode to post
  reg() {
    this.http.post<any>("http://localhost:8080/api/v1/employees", this.regForm.value).subscribe(res => {
      alert("Registration Succussed");
      this.regForm.reset();
      this.router.navigate(['view']);
    }, err => {
      alert("Data not submitted")
    })
  }

}
