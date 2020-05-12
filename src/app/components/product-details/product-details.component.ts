import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  title = "Product Details";

  @Input()
  product: Product;

  @Output()
  closeWindowComponent = new EventEmitter();

  @Output()
  updateProductDetails = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  closeWindow() {
    this.closeWindowComponent.emit(true);
  }

  updateProduct() {
    console.log({"1":this.product});
    this.updateProductDetails.emit(this.product);
  }
}
