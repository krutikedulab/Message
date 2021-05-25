import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import{ Post } from '../post.model';
import { PostService } from "../post.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredTitle='';
  enteredContent='';
  //@Output() postCreated=new EventEmitter<Post>(); //by using this @output we made postCreated as a event which can be listen to from the outside means in the parent component i.e. app.component.html
  //<Post> its a class name we created in post.model. It tells that data is of which type type

  constructor(public postsService: PostService){}

  onAddPost(form: NgForm){  //NgForm gives access to the form
    if(form.invalid){ //if we are not writing this then we can save blank form, if we dont want then this is needed
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm(); //This will resert the form i.e it will clear the input once submitted
  }
}






    /*Alternate way if dont write this.postsService.addPost(form.value.title, form.value.content);*/


    /*const post: Post={     //Post is a class in Model. We are telling that which type of data should be there
      title: form.value.title, //title is the name we gave in post-create.component.html in inpout field
      content: form.value.content //content is the name we gave in post-create.component.html in inpout field
    };

    this.postCreated.emit(post); //using this line we are passing our post variable as a argument
  }
}*/
