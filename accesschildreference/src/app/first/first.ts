import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {

  name:string="Hello AppComponent From First";

  send(){
    alert(this.name);
  
    return this.name;
  }

}
