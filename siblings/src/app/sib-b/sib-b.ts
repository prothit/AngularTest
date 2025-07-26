import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sib-b',
  imports: [FormsModule,CommonModule],
  templateUrl: './sib-b.html',
  styleUrl: './sib-b.css'
})
export class SibB implements OnInit {

  constructor(private mediatorService:MediatorService){}

   ngOnInit() {
    this.receiveMessage();
    //throw new Error('Method not implemented.');
  }
  messageB:string='';
  messagesA:string[]=[];
  isError:boolean=false;
   

  sendMessage(){
    this.isError=false;
    try {
        this.mediatorService.sendMessageToA(this.messageB);
      } catch (error) {
        alert(error);
        this.isError=true;
      }
  }
   receiveMessage(){
    this.messagesA=this.mediatorService.siblingBmessages;
   }

}
