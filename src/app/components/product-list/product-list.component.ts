import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  title = "Product List";

  @Input()
  products: Product[];

  @Output()
  selectionChanged = new EventEmitter();

  selectedProduct: Product;

  constructor() {}

  ngOnInit(): void {}

  selectProduct(pid) {
    this.selectedProduct = this.products.find((product) => product.id === pid);
    this.selectionChanged.emit(this.selectedProduct);
  }
}
