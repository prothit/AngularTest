import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mydirective } from './mydirective';
import { First } from './first/first';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Mydirective,First],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'customdirective';
}
