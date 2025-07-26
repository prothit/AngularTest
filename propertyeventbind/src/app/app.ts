import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'propertyeventbind';
  buttonName:string="submit";
  greet:string="Welcome Here";
f1(){
  alert(this.greet);
}

}
