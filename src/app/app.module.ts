import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponet } from './home/products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConverToSpacePipe } from './shared/convert-to-spaces.pipe';
import {StarComponent} from "./shared/star.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponet,
    ConverToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
