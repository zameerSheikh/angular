import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-simple',
    template: 'You entered: {{simpleInput}}'
})
export class SimpleComponent implements OnChanges{
    
    @Input()
    simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for(let propertyName in changes){
            let change = changes[propertyName];
            let current = JSON.stringify(changes.currentValue);
            let previous = JSON.stringify(changes.previousValue);
            console.log(propertyName + 'current value =' + current + ', previous value: ' + previous);
        }
    };
}