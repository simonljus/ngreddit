import { Data2 } from "./subreddit.model";

export interface ICustomEntry{
    thumbnail:string
    thumbnailHeight:number
    thumbnailWidth:number
    created:number
    numComments:number
    author:string
    score:number
    title:string
    selftext:string
}
export type IEntry = ICustomEntry & Data2