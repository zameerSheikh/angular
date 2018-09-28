import { Component, OnInit } from "@angular/core";
import { PreferenceService } from '../preference.service';

@Component({
    template: `<h3>You are on the home component.</h3>
                <div>
                Preferred colour: <input type="text" [(ngModel)]="color" [style.background]="color"/>
                </div>`
})
export class HomeComponent implements OnInit{

    constructor(private _preference: PreferenceService){

    }

    ngOnInit(){

    }

    get color(): string{
        return this._preference.color;
    }

    set color(value: string){
        this._preference.color = value;
    }

}