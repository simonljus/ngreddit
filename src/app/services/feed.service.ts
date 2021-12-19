import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEntry } from '../models/reddit.model';
import { Data2, RootObject } from '../models/subreddit.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private apiService: ApiService){}

  getPosts$(args: {limit:number, before?:string,after?:string}):Observable<Array<IEntry>>{
    return this.apiService.get<RootObject>({url:'reddit/r/sweden.json',params:args}).pipe(map(r =>r.data.children.map(c=>this.toEntry(c.data))))
  }

  toEntry(entryDTO: Data2):IEntry{
    return Object.assign({}, entryDTO, {thumbnail: entryDTO.thumbnail === 'self' || entryDTO.thumbnail === 'default' ? null : entryDTO.thumbnail, numComments:entryDTO.num_comments,created:entryDTO.created*1000,thumbnailHeight:entryDTO.thumbnail_height as number ,thumbnailWidth:entryDTO.thumbnail_width as number});
  }
}
