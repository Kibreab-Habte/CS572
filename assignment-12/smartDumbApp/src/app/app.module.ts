import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { DumbComponent } from './dumb.component';
import { IsVisibleDirective } from './isVisible.directive';
import { MakeBiggerDirective } from './makeBigger.direcrtive';
import { MultiPipe } from './multi.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    MakeBiggerDirective,
    MultiPipe,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
