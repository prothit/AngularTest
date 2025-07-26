import { Component ,ViewChild,AfterViewInit, AfterContentChecked} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {First} from './first/first';
import { Grand } from './grand/grand';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,CommonModule,UpperCasePipe,FormsModule,Grand],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterContentChecked{
  protected title = 'mycontentchild';
  name:string='rohit';
  appfirst1: string ='';
  appgrand1:string='';
constructor(){}
  

 
@ViewChild(First)
  private first:First=new First();
  

   ngAfterContentChecked(){
   this.appfirst1=this.first.myfirst;
   this.appgrand1=this.first.mygrand1;
  }

  
}
