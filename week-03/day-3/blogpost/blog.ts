"use strict";
import { Blogpost } from "./blogpost";
import { timsPost } from "./blogpost";
import { williamsPost } from "./blogpost";
import { johnsPost } from "./blogpost";

class Blog {
  blogPosts: string[];

  constructor() {
    this.blogPosts = [];
  }

  addBlogPost(blogpost: any) {
    this.blogPosts.push(blogpost);
  }

  deleteBlog(postIndex: number) {
    this.blogPosts.splice(postIndex, 1);
  }

  update(postIndex: number, post: any){
    this.blogPosts.splice(postIndex, 1, post);
  }

}

let newBlog = new Blog;

newBlog.addBlogPost(timsPost);
newBlog.addBlogPost(williamsPost);
newBlog.addBlogPost(johnsPost);

