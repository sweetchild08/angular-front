import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFountComponent } from './not-fount/not-fount.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { FormsModule } from '@angular/forms';
import { BrandViewComponent } from './brand-view/brand-view.component';
import { BrandAddComponent } from './brand-add/brand-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFountComponent,
    BrandEditComponent,
    BrandViewComponent,
    BrandAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'/home', pathMatch:'full'},
      { path: 'home', component: LoginComponent },
      { path: 'brand/:brandId/edit', component: BrandEditComponent },
      { path: 'brand/:brandId/view', component: BrandViewComponent },
      { path: '**', component: NotFountComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
