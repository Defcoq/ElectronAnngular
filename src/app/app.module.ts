import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWigModule } from 'ngx-wig';

import { AppComponent } from './app.component';
import { EditeurComponent } from './editeur/editeur.component';

@NgModule({
  declarations: [
    AppComponent,
    EditeurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxWigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
