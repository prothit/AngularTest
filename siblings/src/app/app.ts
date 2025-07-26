import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SibA } from './sib-a/sib-a';
import { SibB } from './sib-b/sib-b';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SibA,SibB,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'siblings';
  myarr:number[]=[];
  i:number=0;

  ngOnInit(){
    this.myfun();
  }

  myfun(){
     for(this.i=0;this.i<20; this.i++){
      this.myarr.push(this.i);
     }
     
  }

}
