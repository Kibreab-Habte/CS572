import {Component, Input, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-dumb',
    template : `
    <li>At {{person.age}} years, still call me {{person.name}}. check it again <span>{{person.name | uppercase}}</span>!</li>
    `,
    styles: ['li {font-size: 1.5em}', 'span { color: red }']
})


export class DumbComponent implements OnInit {

    @Input() person: Person;
   // visibility: boolean = false;
    constructor(){}

    ngOnInit() {}
    
}