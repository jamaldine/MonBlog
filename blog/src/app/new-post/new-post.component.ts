import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {posts} from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private post: posts,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    this.post.addPost(title, content);
    this.router.navigate(['']);
  }
  retourPosts(){
    document.getElementById("jeSuisB").style.border = '5px solid red';
    this.router.navigate(['']);
  }

}
