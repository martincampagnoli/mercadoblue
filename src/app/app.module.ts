import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

//UPDATE firebase config HERE
const firebaseConfig = {
  apiKey: "AIzaSyAa_45DztHO0cemyoECFbBe_Bm_WGS6vV0",
  authDomain: "stube-2d651.firebaseapp.com",
  databaseURL: 'https://stube-2d651-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "stube-2d651",
  storageBucket: "stube-2d651.appspot.com",
  messagingSenderId: "40376188203",
  appId: "1:40376188203:web:808d89da57f2e2fc6b596e"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
