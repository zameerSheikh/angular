import { Component, Input } from "@angular/core";

@Component({
    selector: 'emp-count',
    templateUrl: 'employeeCountComponent.html'
})
export class EmployeeCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
}