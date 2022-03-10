import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewComponent } from '../view/view.component';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  regForm: any = FormGroup;
  actionBtn: string = "Save";
  con: string = "";
  public getEditDta: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required], contact: ['', Validators.required], address: ['', Validators.required]
    });
    this.getEditDta = history.state.editData;
    if (this.getEditDta) {
      this.actionBtn = "Update";
      this.regForm.controls['name'].setValue(this.getEditDta.name);
      this.regForm.controls['contact'].setValue(this.getEditDta.contact);
      this.regForm.controls['address'].setValue(this.getEditDta.address);
    }
    console.log(this.getEditDta, "Inside the reg");

  }

  //methode to post
  reg() {
    if (!this.getEditDta) {
      if (this.regForm.valid) {
        this.http.post<any>("http://localhost:8080/api/v1/employees", this.regForm.value).subscribe(res => {
          alert("Registration Succussed");
          this.regForm.reset();
          this.router.navigate(['view']);
        }, err => {
          alert("Data not submitted")
        })

      }
    }
    else {
      this.updateData(this.regForm.value, this.getEditDta.id);
    }
  }


  updateData(data: any, id: number) {
    if (this.regForm.valid) {
      this.http.put<any>("http://localhost:8080/api/v1/employees/" + id, data).subscribe(res => {
        alert("Updated Succussed");
        this.regForm.reset();
        this.router.navigate(['view']);
      }, err => {
        alert("Data not updated")
      })
    }
  }




}
