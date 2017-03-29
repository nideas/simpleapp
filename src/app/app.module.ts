import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDeg1p2lTESeyZHqtOanEjfNklKxCGtVOQ",
    authDomain: "angular4-f74ac.firebaseapp.com",
    databaseURL: "https://angular4-f74ac.firebaseio.com",
    storageBucket: "angular4-f74ac.appspot.com",
    messagingSenderId: "1042628695410"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
