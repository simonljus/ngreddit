import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { VideoModule } from '../video/video.module';
import { MediaModule } from '../media/media.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PipesModule,
    MediaModule,
  ],
  exports:[CardComponent]
})
export class CardModule { }
