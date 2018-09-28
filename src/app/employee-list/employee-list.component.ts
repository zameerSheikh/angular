import { Component, OnInit } from "@angular/core";
import { IEmployee } from "../employee/employee";
import { EmployeeService } from '../employee/employee.service';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'emp-list',
  templateUrl: './employee-list.component.html',
  providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit{
  employees: IEmployee[];

  selectedEmployeeCountRadioButton: string = 'all';

  constructor(private _employeeService: EmployeeService, private _preference: PreferenceService){

  }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }

  get color(): string{
      return this._preference.color;
  }

  set color(value: string){
      this._preference.color = value;
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
