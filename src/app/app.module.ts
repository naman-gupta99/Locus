import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { ConnectorsModule } from "./connectors/connectors.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ConnectorsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
