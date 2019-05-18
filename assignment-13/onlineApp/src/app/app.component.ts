import { Component } from '@angular/core';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
      <div>
      <nav>
        <a [routerLink]="['users']">Users</a>
      </nav>
      <router-outlet></router-outlet> 
    </div> 
  `,
  styles: [

    `div { 
      font-size: 80px
      display: block; 
      margin-left: 35em; 
      }
      nav{
        border-style: solid;
       border-color: yellow;
       padding: 30px;
       width: 70px;
      }
      `]
})
export class AppComponent {
  title = 'onlineApp';

  constructor( public dataService: DataService){
    this.dataService.getOnlineData()
    .pipe(map(data => JSON.stringify(data)))
    .subscribe(res => localStorage.usersData = res);

    
  }
}
