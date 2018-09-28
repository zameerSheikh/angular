import { Component, OnInit } from "@angular/core";
import { EmployeeService } from '../employee/employee.service';
import { IEmployee } from "../employee/employee";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit{

  employee: IEmployee;
  name:string = 'Addy';

  empDetails;

  constructor(private _employeeService: EmployeeService, 
            private _activatedRoute: ActivatedRoute, 
            private _router: Router){

  }

  onBackbtnClick():void {
    this._router.navigate(['/employees'])
  }
  ngOnInit(){
    let empCode:string = this._activatedRoute.snapshot.params['code'];

    this.empDetails = this._employeeService.getEmployeeDetails(empCode);
    //this.employee = this._employeeService.getEmployeeDetails(2);
  }
}

