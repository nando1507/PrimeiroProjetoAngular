import { CommentStmt } from "@angular/compiler";

export interface Photo{
    id:number;
    postDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    Comments:number;
    userId:number;
}