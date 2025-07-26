import { Component } from '@angular/core';
import { Mydirective } from '../mydirective';

@Component({
  selector: 'app-first',
  imports: [Mydirective],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {

}
