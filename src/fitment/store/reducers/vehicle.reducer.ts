// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";
import { Action } from "@ngrx/store";

export interface VehicleState {
  years: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): any {
  console.log(action.type, "times");
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      console.log("load");
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      console.log("sucess");
      return {
        ...state,
        loaded: true,
        loading: false
      };
    }
    default:
      console.log("data");
      return state;
  }

  // return state;
}
