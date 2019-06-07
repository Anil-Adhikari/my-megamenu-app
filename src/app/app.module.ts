import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import {MegaMenuModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MegamenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
