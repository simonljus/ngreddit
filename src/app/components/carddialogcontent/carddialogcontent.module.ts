import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CarddialogcontentComponent } from './carddialogcontent.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RelativeDatePipe } from 'src/app/pipes/relative-date.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { VideoModule } from '../video/video.module';
import { MediaModule } from '../media/media.module';



@NgModule({
  declarations: [CarddialogcontentComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    PipesModule,
    MediaModule,
  ]
})
export class CarddialogcontentModule { }
