import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { CardModule } from '../card/card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CarddialogcontentModule } from '../carddialogcontent/carddialogcontent.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PaginatorModule } from '../paginator/paginator.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    CardModule,
    MatDialogModule,
    CarddialogcontentModule,
    PipesModule,
    PaginatorModule
  ]
})
export class FeedModule { }
