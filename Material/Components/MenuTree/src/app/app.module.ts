import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
import { MenuTreeTable } from './menu-tree/menu-tree-table';

@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent,
    MenuTreeTable
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
