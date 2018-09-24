import { Component } from "@angular/core";

@Component({
  selector: 'emp-list',
  templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent {
  employees: any[];

  constructor(){
  this.employees= [
    {code: 'emp01', name: 'Alex',  gender: 'male',    dob:'2-04-1993', salary: 5500},
    {code: 'emp02', name: 'Jones', gender: 'female',  dob:'8-07-1995', salary: 5700},
    {code: 'emp03', name: 'Mark',  gender: 'male',    dob:'6-09-1990', salary: 5800},
  ];
}

  getEmployees(): void{
    this.employees= [
      {code: 'emp01', name: 'Alex',  gender: 'male',    dob:'2-04-1993', salary: 5500},
      {code: 'emp02', name: 'Jones', gender: 'female',  dob:'8-07-1995', salary: 5700},
      {code: 'emp03', name: 'Mark',  gender: 'male',    dob:'6-09-1990', salary: 5800},
      {code: 'emp04', name: 'Rose',  gender: 'female',  dob:'6-09-1994', salary: 6000}
    ];
  }

  trackByEmpCode(index: number, employee: any) : string{
        return employee.code;
  }
}
