import { Component ,AfterViewInit,ViewChild, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {First} from './first/first';
import { FormsModule } from '@angular/forms';
import { CommonModule ,UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,FormsModule,CommonModule,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements  AfterViewInit {
  
  constructor(){}
  
  
  protected title = 'myviewchild';
  name:string='';
  
  @ViewChild(First)
  private first: First=new First();
  
  ngAfterViewInit() {
   this.name=this.first.fcName;
  }
  
}
