import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TireService {
  private YEARS_URL = "https://api.mocki.io/v1/bcdf729b";
  constructor(private http: HttpClient) {}

  getTireYear() {
    console.log("how are you");
    return this.http.get<any>(this.YEARS_URL);
  }
}
