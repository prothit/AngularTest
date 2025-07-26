import { UpperCasePipe,CommonModule} from '@angular/common';
import { Component ,Input,Output ,EventEmitter,OnInit} from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {
  constructor(){}
  ngOnInit(){}
msg:string="First Component Works";
button:string="Send Parent";
@Input()parentinput:string="";
@Input()check:boolean=false;
@Output()myevent=new EventEmitter<string>();
students:string[]=['Prothit','Sayan','Santanu','Mohit','Rohit','Abhishek'];

sendToParent(){
this.myevent.emit(this.parentinput);

}

}
