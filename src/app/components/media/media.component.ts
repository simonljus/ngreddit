import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  @Input() 
  public height: number
  @Input()
  public width : number
  @Input()
  public imageSource:string | undefined
  @Input()
  public videoSource:string | undefined
  constructor() { }

}
