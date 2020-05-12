import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashbord/dashboard.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
