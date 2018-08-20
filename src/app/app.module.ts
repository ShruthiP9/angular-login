import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {ServService} from './serv.service';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
