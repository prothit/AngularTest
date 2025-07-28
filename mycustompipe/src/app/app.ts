import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SquareRootPipe} from './square-root-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SquareRootPipe,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mycustompipe';
  myval:number=0;
}
