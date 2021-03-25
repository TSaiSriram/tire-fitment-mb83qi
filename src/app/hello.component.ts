import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Tire fitment engine</h1>
  `,
  styles: [
    `
      h1 {
        font-family: ;
        background: palevioletred;
        color: white;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
