import { AfterContentInit, Component ,ContentChild} from '@angular/core';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Grand } from '../grand/grand';

@Component({
  selector: 'app-first',
  imports: [CommonModule,UpperCasePipe,FormsModule,Grand],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First implements AfterContentInit {

  constructor(){}
  
myfirst:string='I am first';
mygrand1:string='';

@ContentChild(Grand)
private  grand:Grand=new Grand();
ngAfterContentInit() {
  this.mygrand1=this.grand.mygrand;
  
  }


}
