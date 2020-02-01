import { MenuComponent } from './exercices/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ExercicesModule } from './exercices/exercices.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExercicesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
