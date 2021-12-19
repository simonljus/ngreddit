import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  /*
  */
  @Input() 
  public disabled:boolean
  @Input()
  public onPageChange(event:PageEvent){
    this.page.emit(event);
  }
}
