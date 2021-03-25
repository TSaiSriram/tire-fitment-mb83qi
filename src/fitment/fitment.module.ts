import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { EffectsModule } from "@ngrx/effects";
import { TireEffects } from "./store/effects/vehicle.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("fitment", reducers),
    EffectsModule.forRoot([TireEffects])
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent]
})
export class FitmentModule {}
