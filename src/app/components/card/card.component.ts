import { Component, Input, OnInit } from '@angular/core';
import { IEntry } from 'src/app/models/reddit.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input()
  public entry:IEntry



  
  constructor() { }

}
