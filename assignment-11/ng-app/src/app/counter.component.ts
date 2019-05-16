import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'app-counter',
        template: `
            <div class="bor">
            <button class="decrease" (click)="decrement()"> - </button>
            {{counterValue}}
            <button class="increase" (click)="increment()"> + </button>
            </div>
          `,
        styles: [ ` .decrease {
            width: 25px;
            height:25px;
            background-color: red;
          }
          .increase {
            width: 25px;
            height:25px;
            background-color: green;
          }
          .bor{
            padding : 20px;
             border-style: solid;
             border-color: #32CD32;
             width: 20%;
             margin-top: 25px;
          }
        ` ]
})
export class CounterComponent implements OnInit {
        
        @Input() counterValue: number;

        @Output() counterChange;

        constructor() {
            this.counterValue = 0;
            this.counterChange = new EventEmitter();
        }

        ngOnInit() {}

        decrement() {
            this.counterValue--;
            this.counterChange.emit(this.counterValue);
        }

        increment() {
            this.counterValue++;
            this.counterChange.emit(this.counterValue);
        }
}