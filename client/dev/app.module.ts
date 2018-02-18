import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import {CoreComponent} from './app/core.component';
import {TopbarComponent} from './app/topbar.component';
import {RouterModule} from '@angular/router';
import {EditComponent} from './app/kittens/edit.component';
import {FormsModule} from '@angular/forms';
import {KittensService} from './app/kittens/services/kittens.service';
import {HttpClientModule} from "@angular/common/http";
import {KittenListComponent} from './app/kittens/kitten.list.component';
let allRoutes  =  [];
let appRoutes:any = {path:'app',component:CoreComponent,children :[
  {path:'item/list',component:KittenListComponent},
  {path:'add/kitten',component:EditComponent}]};

allRoutes.push(appRoutes)
allRoutes.push({path: '**', redirectTo: 'app'});
@NgModule({
  declarations: [
    AppComponent,CoreComponent,TopbarComponent,EditComponent,KittenListComponent
  ],
  imports: [
    BrowserModule,AlertModule.forRoot(),RouterModule.forRoot(allRoutes, { useHash: true}), FormsModule,HttpClientModule
  ],
  providers: [KittensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
