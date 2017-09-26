import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';



const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'search/:keyword/:page', component: SearchComponent },
  {path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'product/:id', component: ProductComponent },
  {path: 'profile', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
