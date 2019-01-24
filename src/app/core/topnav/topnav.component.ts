import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
  styleUrls: ["./topnav.component.scss"]
})
export class TopnavComponent implements OnInit {
  Username: string;

  constructor() {
    this.Username = "Nikhil Gupta";
  }

  ngOnInit() {}
}
