import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'parentchild';
  myVar:string="Comes From Parent Component AppComponent.ts File myVar Variable Or Property";
  fromchild:string="";
  anotherfromchild:string="";

  receivefromchild(evt: string){
  this.fromchild=evt;
  }

  receivefromchild2(msg:string){
    this.myVar=msg;
  }

}
