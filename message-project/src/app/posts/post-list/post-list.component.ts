import { Component, Input, OnInit } from "@angular/core"
import{ Post } from '../post.model';
import { PostService } from "../post.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
 //posts=[
   // {title:'First Post', content:"This is the first post's component"},
   // {title:'Second Post', content:"This is the second post's component"},
   // {title:'Third Post', content:"This is the third post's component"}
  //]
  posts: Post[]=Array();   //Post is a class in Model. We are telling that which type of data should be there
  private postsSub= new Subscription;

  constructor(public postService: PostService){  //public keyword will automatically create a new property in this component and store the incoming value in that property
  }
  ngOnInit(){
    this.posts= this.postService.getPost();
    this.postService.getPostUpdateListener().subscribe((posts: Post[])=>{
        this.posts=posts;
    });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe(); // this will prevent memory leak
  }
}
