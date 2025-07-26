import { Component } from '@angular/core';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-grand',
  imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './grand.html',
  styleUrl: './grand.css'
})
export class Grand {
  constructor(){}
mygrand:string='I am grandchild';
}
