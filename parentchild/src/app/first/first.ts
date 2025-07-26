import { UpperCasePipe } from '@angular/common';
import { Component ,OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  imports: [FormsModule,UpperCasePipe],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First implements OnInit {
ngOnInit(): void {
  
}
fcName:string="first";
fcModel:string="";
 @Input() fromParent:string="";
 @Output()greetparent=new EventEmitter<string>();
 @Output()greetparent2=new EventEmitter<string>();
 message:string="Hello Parent From FirstComponent.I am your Child";

 sendToParent(){
this.greetparent.emit(this.message);

 }

 sendToParent2(){
this.greetparent2.emit(this.fromParent);

 }


}
