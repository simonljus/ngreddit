import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { finalize, map, Observable, pairwise, startWith, Subject, Subscription, switchMap, tap } from 'rxjs';
import { IEntry } from 'src/app/models/reddit.model';
import { FeedService } from 'src/app/services/feed.service';
import { CarddialogcontentComponent, CardDialogData } from '../carddialogcontent/carddialogcontent.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit,OnDestroy {
  public pageStore :Subject<PageEvent> = new Subject<PageEvent>();
  public posts$ :Observable<Array<IEntry>>
  constructor(private feedService:FeedService, private dialog: MatDialog) { }
  public loading: number =0;
  public posts : Array<IEntry> = [];
  public subscriptions: Subscription = new Subscription();
  ngOnInit(): void {
    const pair =  this.pageStore.asObservable().pipe(startWith({pageSize:5,pageIndex:0} as PageEvent),pairwise());
    const pageSub = pair.pipe(startWith([{pageSize:5,pageIndex:0} as PageEvent,{pageSize:5,pageIndex:0} as PageEvent]),map(([prevEvent,pageEvent])=>{
        if(prevEvent?.pageSize != pageEvent.pageSize){
            const prevFrom = (prevEvent?.pageIndex || 0) * (prevEvent?.pageSize || 0)
            const currentFrom = pageEvent.pageIndex * pageEvent.pageSize;
            if(pageEvent.pageIndex ===0){
              return {limit:pageEvent.pageSize};
            }
            if(currentFrom > prevFrom){
              return {limit:pageEvent.pageSize,after:this.posts[this.posts.length -1]};
            }else{
              return {limit:pageEvent.pageSize,before:this.posts[this.posts.length -1]};
            }
            
        }
        if (pageEvent.previousPageIndex !== null && pageEvent.previousPageIndex !== undefined ){
            if(Math.abs(pageEvent.pageIndex -pageEvent.previousPageIndex) > 1){
                  return {limit:pageEvent.pageSize};
            }
            if(pageEvent.pageIndex < pageEvent.previousPageIndex){
                const before = this.posts.length ? `t3_${this.posts[0].id}` : undefined;
                return {limit:pageEvent.pageSize,before};
            }else{
              const after = this.posts?.length ? `t3_${this.posts[this.posts.length-1].id}` : undefined;
              return {limit:pageEvent.pageSize,after};
            }
        }
        else{
          return {limit:pageEvent.pageSize}
        }
    }),switchMap(pageEvent=>{this.increaseLoading();return this.feedService.getPosts$(pageEvent as {limit:number,before?:string,after?:string}).pipe(tap(p=>this.posts=p),finalize(()=>this.decreaseLoading()))})).subscribe();
    this.subscriptions.add(pageSub);
  }
  private increaseLoading(){
    this.loading+=1;
  }
  private decreaseLoading(){
    this.loading-=1;
  }
  onPostClick(post:IEntry):void{
    this.dialog.open<CarddialogcontentComponent,CardDialogData>(CarddialogcontentComponent,{data:{entry:post}})
  }
  onPageChange(event:PageEvent){
    this.pageStore.next(event);
  }
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

}
