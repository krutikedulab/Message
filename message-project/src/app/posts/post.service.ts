import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'}) //if we are not writing this @Injectable then we have to import service file in app.component.ts and declare in providers.
      //providedIn:root will provide in root level, by using this angular will find this file andwill create only instance of the service for the entire app
export class PostService{
  private posts: Post[]=[];
  private postsUpdated=new Subject<Post[]>();

  getPost(){
    /*return this.posts; This will return an original array which we dont want
    bcoz array is object in typescript and javascript and are reference types*/

    return [...this.posts]; //this is call spread operator.
          //three dots take all the elements of another array, pull them out of that array and add them to new array
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {title: title, content: content}; //here first title & content word is a key which we defined in model. And another title and content is a value which is passed as argument above in addPost().
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}
