import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  employeeForm: Employee = {
      id: 0,
      empname: '',
      address:'',
      gender : '',
      mobileno: 0,
      salary:0
  }


  constructor(private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {}
  create(){
    this.employeeService.create(this.employeeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/employee/list"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  setUppercaseName(name:string){
    this.employeeForm.empname=this.employeeForm.empname.toUpperCase();
  }

}
