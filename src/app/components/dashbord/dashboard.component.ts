import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  selectedProduct: Product;
  selectedProductToUpdate: Product;

  constructor() {}

  ngOnInit(): void {}

  dashboardSelectionChanged(product) {
    this.selectedProduct = product;
    this.selectedProductToUpdate = null;
  }

  closeDetailsWindow(status) {
    if (status == true) {
      this.selectedProduct = null;
    }
  }

  closeFormWindow(status) {
    if (status == true) {
      this.selectedProductToUpdate = null;
    }
  }
  updateProduct(product) {
    this.selectedProductToUpdate = product;
    console.log({ sp: this.selectedProduct });
    console.log({ sptu: this.selectedProductToUpdate });
  }
  products: Product[] = [
    {
      id: 1,
      name: "pen",
      model: "fine carbue",
      description: "It is used to write. Not erasable",
      price: 10,
      manufacturer: "reynolds",
      quantity: 400,
      inStock: true,
    },
    {
      id: 2,
      name: "pencil",
      model: "scholar",
      description: "It is used to write. Erasable",
      price: 5,
      manufacturer: "natraj",
      quantity: 200,
      inStock: true,
    },
    {
      id: 3,
      name: "eraser",
      model: "fine art",
      description: "It is used erase anything written by pencil",
      price: 5,
      manufacturer: "camel",
      quantity: 20,
      inStock: false,
    },
    {
      id: 4,
      name: "sharpner",
      model: "pin point",
      description: "It is used to shrap pencil lead",
      price: 5,
      manufacturer: "camel",
      quantity: 250,
      inStock: true,
    },
    {
      id: 5,
      name: "compass box",
      model: "classmate",
      description: "It contain mathematical drawing instruments",
      price: 150,
      manufacturer: "classmate",
      quantity: 120,
      inStock: true,
    },
    {
      id: 6,
      name: "scale",
      model: "footer type 1",
      description: "It is used for measurement",
      price: 20,
      manufacturer: "classmate",
      quantity: 160,
      inStock: true,
    },
  ];
}
