import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ForIfDirectives';
  sendchild:string="Calling you son";
  ischeck2:boolean=true;

receiveFromChild(msg:string){
 this.sendchild=msg;
}

}
