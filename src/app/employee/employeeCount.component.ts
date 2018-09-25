import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'emp-count',
    templateUrl: 'employeeCountComponent.html'
})
export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'all';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}