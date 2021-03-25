import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import {
  LoadYears,
  LOAD_YEARS,
  LoadYearsSuccess,
  LOAD_YEARS_SUCCESS
} from "../actions/vehicle.action";
import { EMPTY, of } from "rxjs";
import { TireService } from "../../services/tire.service";

@Injectable()
export class TireEffects {
  constructor(private actions$: Actions, private tireService: TireService) {}

  loadTire$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadYears>(LOAD_YEARS),
      mergeMap(() =>
        this.tireService.getTireYear().pipe(
          map(tires => {
            console.log("data is here");
            return {
              type: LOAD_YEARS_SUCCESS,
              payload: tires
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
