import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEntry } from 'src/app/models/reddit.model';


export interface CardDialogData {
  entry: IEntry
}
@Component({
  selector: 'app-carddialogcontent',
  templateUrl: './carddialogcontent.component.html',
  styleUrls: ['./carddialogcontent.component.scss']
})
export class CarddialogcontentComponent {
  public entry: IEntry;
  constructor(public dialogRef: MatDialogRef<CarddialogcontentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardDialogData) {
      this.entry= data.entry 
     }


}
