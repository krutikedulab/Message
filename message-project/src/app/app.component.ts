import { Component } from '@angular/core';
//import{ Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}



/*

ALTERNATE WAY WRITE THIS CODE IN APPCOMPONENT CLASS

storedPosts: Post[]=Array();      //Post is a class in Model. We are telling that which type of data should be there

onPostAdded(post){
  //console.log(post)
  this.storedPosts.push(post);
}*/
