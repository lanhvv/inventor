import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventorHomeComponent, KeysPipe } from './modules/inventor-home/inventor-home.component';
import { InventorProductsComponent } from './modules/inventor-products/inventor-products.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InventorCategoriesComponent } from './modules/inventor-categories/inventor-categories.component';
import { InventorStoresComponent } from './modules/inventor-stores/inventor-stores.component';

@NgModule({
  declarations: [
    AppComponent,
    InventorHomeComponent,
    KeysPipe,
    InventorProductsComponent,
    InventorCategoriesComponent,
    InventorStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
