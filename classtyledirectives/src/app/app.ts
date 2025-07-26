import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,CommonModule,FormsModule,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'classtyledirectives';
  employees:string[]=['Prothit','Amitava','Rohit','Mohit'];
  basicmsg:string='This is Appcomponent ts file.';
  listexists:boolean=false;

  testlist():boolean{
    if(this.employees!=null && this.employees.length>0){
      this.listexists=true;
    }else{
      this.listexists=false;
    }
    return this.listexists;
  }

   remove(name1:string){
   this.employees.filter((name)=>{
    if(name1===name){
      let index=this.employees.indexOf(name1);
       this.employees.splice(index,1);
       
    }
     
      
   });


  }

  receivelist(list:string[]){
     this.employees=list;
  }
}
