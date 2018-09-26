import { Component, OnInit } from "@angular/core";
import { IEmployee } from "../employee/employee";
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'emp-list',
  templateUrl: './employee-list.component.html',
  providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit{
  employees: IEmployee[];

  selectedEmployeeCountRadioButton: string = 'all';

  constructor(private _employeeService: EmployeeService){

  }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }

  
  onEmployeeCountRadioButtonChanged(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmpCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmpCount(): number {
    return this.employees.filter(e => e.gender == 'male').length;
  }

  getTotalFemaleEmpCount(): number {
    return this.employees.filter(e => e.gender == 'female').length;
  }
}
