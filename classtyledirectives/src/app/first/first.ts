import { CommonModule } from '@angular/common';
import { Component ,Input,Output,EventEmitter ,OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule,CommonModule],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First implements OnInit {
  constructor(){}
  ngOnInit() {
    
  }
  isdisplay:boolean=false;
  emp:string='';
  @Input()employees:string[]=[];
  @Output()myevent=new EventEmitter<string[]>();



  addEmployee(){
    this.employees.push(this.emp);
    this.sendemployeetoparent();
  }
sendemployeetoparent(){
   this.myevent.emit(this.employees);
}
 

  

}
