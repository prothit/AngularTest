import { Component ,Input} from '@angular/core';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  imports: [CommonModule,UpperCasePipe,FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {

  @Input()fcName:string='From First Child';

}
