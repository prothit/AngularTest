import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  siblingAmessages:string[]=[];

  siblingBmessages:string[]=[];


   sendMessageToA(msg:string){
    if(msg!=null && msg!=''){
    this.siblingAmessages.push(msg);
    }else{
      throw new Error("message cant be empty");
    }

  }

  sendMessageToB(msg:string){
    if(msg!=null && msg!=''){
       this.siblingBmessages.push(msg);
    }else{
       throw new Error("message cant be empty");
    }
  }

 

  
  
}
