import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BrandComponent } from "./sidenav/brand/brand.component";
import { BrandPanelComponent } from "./sidenav/brand/brand-panel/brand-panel.component";
import { ProductsComponent } from "./sidenav/products/products.component";
import { ProductsPanelComponent } from './sidenav/products/products-panel/products-panel.component';

@NgModule({
  declarations: [
    SidenavComponent,
    BrandComponent,
    BrandPanelComponent,
    ProductsComponent,
    ProductsPanelComponent
  ],
  imports: [CommonModule],
  exports: [SidenavComponent]
})
export class CoreModule {}
