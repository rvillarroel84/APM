import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponet } from './home/products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConverToSpacePipe } from './shared/convert-to-spaces.pipe';
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './products/product-details.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    ProductListComponet,
    ConverToSpacePipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponet},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
