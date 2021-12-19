import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModule } from '../video/video.module';
import { MediaComponent } from './media.component';



@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    VideoModule
  ],
  exports :[MediaComponent]
})
export class MediaModule { }
