import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { PlaceAdPageComponent } from './place-ad-page/place-ad-page.component';
<<<<<<< HEAD
import { SetPriceComponent } from './set-price/set-price.component';
=======
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
>>>>>>> Firebase

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { AdDetails } from './ad-details/ad-details.model';

=======
import { AngularFireModule } from 'angularfire2';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { AuthGuard } from './services/auth.guard';
import { MatCardModule } from '@angular/material';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

export const firebaseConfig = {
  apiKey: 'AIzaSyACMsm0DyhLSfywElPRUr3InjnxBf6Fokg',
  authDomain: 'webproject-543fe.firebaseapp.com',
  databaseURL: 'https://webproject-543fe.firebaseio.com',
  projectId: 'webproject-543fe',
  storageBucket: '',
  messagingSenderId: '63417550637'
};
>>>>>>> Firebase

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AdListComponent },
  { path: 'placead', component: PlaceAdPageComponent },
<<<<<<< HEAD
  { path: 'loginregister', component: LoginRegisterPageComponent },
  { path: 'setprice', component: SetPriceComponent},
  { path: 'register', redirectTo: 'loginregister' },  
  { path: 'login', redirectTo: 'loginregister' }

=======
  { path: 'loginregister', component: LoginRegisterPageComponent, canActivate: [AuthGuard] }
  //{ path: 'register', redirectTo: 'loginregister' },
  //{ path: 'login', redirectTo: 'loginregister' }
>>>>>>> Firebase
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdListComponent,
    FooterComponent,
    AdDetailsComponent,
    MovieListComponent,
    MovieItemComponent,
    LoginRegisterPageComponent,
    PlaceAdPageComponent,
<<<<<<< HEAD
    SetPriceComponent
=======
    NotificationComponent
>>>>>>> Firebase
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
    HttpClientModule
=======
    MatCardModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
>>>>>>> Firebase
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    { provide: LocationStrategy, useClass: HashLocationStrategy }, AuthService, AuthGuard, NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
