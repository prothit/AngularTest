import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediatorService } from '../mediator';
@Component({
  selector: 'app-sib-a',
  imports: [CommonModule,FormsModule],
  templateUrl: './sib-a.html',
  styleUrl: './sib-a.css'
})
export class SibA implements OnInit{

  constructor(private mediatorService:MediatorService){}
  ngOnInit() {
    this.receiveMessage();
    //throw new Error('Method not implemented.');
  }
    messageA:string='';
    messagesB:string[]=[];
    isError:boolean=false;
    sendMessage(){
      try {
        this.isError=false;
        this.mediatorService.sendMessageToB(this.messageA);
      } catch (error) {
        alert(error);
        this.isError=true;
      }
      
    }
     receiveMessage(){
      this.messagesB=this.mediatorService.siblingAmessages;
     }

}
