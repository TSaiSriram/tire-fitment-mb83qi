import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FitmentState } from "../store/reducers";
import { VehicleState } from "../store/reducers/vehicle.reducer";
import * as fromVehicle from "../store/actions/vehicle.action";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;
  years: any;
  selectedInput: any = [];
  typeFlag: any;
  finalValue: any;
  header: string = "Select vehicle";
  hide: boolean;
  constructor(private http: HttpClient, private store: Store<VehicleState>) {}

  ngOnInit() {}

  getYears() {
    this.store.dispatch(new fromVehicle.LoadYears());
    this.years$ = this.store.select("years");
    this.selectedInput = [];
    this.years$.subscribe(data => console.log(data));
    console.log("getYears");
  }

  make() {
    console.log("getMakes");
    this.http.get("https://api.mocki.io/v1/498fe082").subscribe((res: any) => {
      console.log("res:", res);
      this.years = res.make;
      this.typeFlag = res.type;
    });
  }

  model() {
    console.log("getModel");
    this.http.get("https://api.mocki.io/v1/dedd816d").subscribe((res: any) => {
      console.log("res:", res);
      this.years = res.model;
      this.typeFlag = res.type;
    });
  }
  trim() {
    console.log("getModel");
    this.http.get("https://api.mocki.io/v1/dbd6febb").subscribe((res: any) => {
      console.log("res:", res);
      this.years = res.trim;
      this.typeFlag = res.type;
    });
  }
  year(value, type) {
    switch (type) {
      case "fitmentYearResponse": {
        this.selectedInput.push(value);
        this.make();
        this.header = "Select Make";
        break;
      }
      case "fitmentMakeResponse": {
        this.selectedInput.push(value);
        this.model();
        this.header = "Select Model";
        break;
      }
      case "fitmentModelResponse": {
        this.selectedInput.push(value);
        this.trim();
        this.header = "Select Trim";
        break;
      }
      default: {
        this.selectedInput.push(value);
        this.header = "Reselect";
        this.years = [];
      }
    }
    this.finalValue = this.selectedInput.toString().replaceAll(",", " ");
    console.log(
      "select  Value> ",
      this.selectedInput,
      this.selectedInput.toString().replaceAll(",", " ")
    );
  }
}
