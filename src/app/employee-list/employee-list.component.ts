import { Component } from "@angular/core";
import { IEmployee } from "../employee/employee";

@Component({
  selector: 'emp-list',
  templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent {
  employees: IEmployee[];

  selectedEmployeeCountRadioButton: string = 'all';

  constructor(){
  this.employees= [
    {code: 'emp01', name: 'Alex',  gender: 'male',    dob:'2-04-1993', salary: 5500},
    {code: 'emp02', name: 'Jones', gender: 'female',  dob:'8-07-1995', salary: 5700},
    {code: 'emp03', name: 'Mark',  gender: 'male',    dob:'6-09-1990', salary: 5800},
    {code: 'emp04', name: 'Rose',  gender: 'female',  dob:'11-15-1994', salary: 6000},
    {code: 'emp05', name: 'Addy',  gender: 'male',    dob:'10-19-1995', salary: 6500},
    {code: 'emp06', name: 'Tom',  gender: 'male',    dob:'5-21-1989', salary: 6500}
  ];
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
