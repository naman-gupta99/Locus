import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinterestComponent } from "./pinterest/pinterest.component";

@NgModule({
  declarations: [PinterestComponent],
  imports: [CommonModule],
  exports: [PinterestComponent]
})
export class ConnectorsModule {}
