import {Component, OnInit} from '@angular/core';
import {Person} from './person';

@Component({
    selector: 'app-smart',
    template: `
        <button (click)="showHide()">{{buttonText}}</button>
        <hr>
        <div [isVisible]="displayData">
        <h1>Here is the data, check it out:</h1>
        <ol>
            <app-dumb *ngFor="let person of data" [person]="person"></app-dumb>
        </ol>
        </div>
            <div [isVisible]="!displayData">There are no people to display!</div>
            <hr>
            <p makeBigger>Double click me, I will get bigger!</p>

            <div>
                <input type="text" #input (keyup)="pipeData">
                <p>{{input.value | multi:4}}</p>
            </div>
        
    `,
    styles: []
})

export class SmartComponent implements OnInit{
    

    data: Person[];
    displayData: boolean = true;
    btnText = 'hide data'

    constructor(){
        this.data = [ { name: 'Kibreab', age: 30 }, { name: 'Thomas', age: 25 }, { name: 'Luwamey', age: 28 } ];
    }
    showHide() {
		this.btnText = this.displayData ? 'Hide data' : 'Show data';
		this.displayData = !this.displayData;
    }
    
    ngOnInit() {}
    
}