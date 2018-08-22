import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/datatable';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { MyNewPipePipe } from './my-new-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataTableModule,
    MultiSelectModule,
    DialogModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
