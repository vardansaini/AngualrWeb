import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any) {
  console.log(target, name, descriptor); 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';

  @log
  aSimpleMethod() {
    console.log("Hey there!")
  }
}
