import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"]
})
export class BrandComponent implements OnInit {
  brand: boolean;

  constructor() {
    this.brand = true;
  }

  ngOnInit() {}
}
