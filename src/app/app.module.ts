import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { reducer } from "../fitment/store/reducers/vehicle.reducer";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FitmentModule,
    HttpClientModule,
    StoreModule.forRoot({ vehicle: reducer }),
    EffectsModule.forRoot([])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
