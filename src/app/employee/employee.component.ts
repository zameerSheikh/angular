import { Component } from "@angular/core";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent {
  firstName: string = 'Tony';
  lastName: string = 'Aliciea';
  gender: string = 'male';
  age: number = 31;
  name: string = 'Tony Aliciea';
}