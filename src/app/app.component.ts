import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  strokewidth = 10;
  strokeStyle = "fill:#d2a3ff;stroke:#3983ac";
  cstyle = "cx:50;cy:50;r:50;fill:#dfac20;stroke:#3983ab;stroke-width:2"

  switchColor() {
    
  }
}
