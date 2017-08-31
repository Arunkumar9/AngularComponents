import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDMenuTreeComponent } from './mdmenu-tree/mdmenu-tree.component';
import { MDMenuTreeTD } from './mdmenu-tree/menu-tree-td';

@NgModule({
  declarations: [
    AppComponent,
    MDMenuTreeComponent,
    MDMenuTreeTD
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    MDMenuTreeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
