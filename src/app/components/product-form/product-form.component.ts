import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit, OnChanges {
  title = "Product Form";

  @Input()
  product: Product;

  @Output()
  closeWindowComponent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}

  closeWindow() {
    this.closeWindowComponent.emit(true);
  }
}
