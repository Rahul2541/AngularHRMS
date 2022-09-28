import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
declare var window: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allEmployee: Employee[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.employeeService.get().subscribe((data) => {
      this.allEmployee = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.employeeService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allEmployee = this.allEmployee.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
