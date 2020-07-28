import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NmComponent } from './nm/nm.component';
import { AgComponent } from './ag/ag.component';
import { LasComponent } from './las/las.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { XchgService } from './xchg.service';


@NgModule({
  imports:      [ BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ],
  declarations: [ AppComponent, AgComponent,LasComponent ,NmComponent ],
  bootstrap:    [ AppComponent ],
  providers: [XchgService]
})
export class AppModule { }
