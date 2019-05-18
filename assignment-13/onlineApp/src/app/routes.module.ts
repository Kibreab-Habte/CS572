import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UnknownUserComponent } from './users/unknownUser.component'


 
const ROUTES: Routes =[
    {path: 'users', loadChildren: './users/users.module#UsersModule'},
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class RoutingModule{}