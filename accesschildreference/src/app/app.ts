import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { First } from './first/first';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,UpperCasePipe,FormsModule,First],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'accesschildreference';
  name:string='';
}
