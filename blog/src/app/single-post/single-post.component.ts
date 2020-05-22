import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { posts } from '../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

	title:string;
	content:string;
  id:number;
  loveIts:number;
  created_at:Date;

  constructor(private posts: posts,
            private route: ActivatedRoute,
            private router: Router) 
  {

  }

  ngOnInit() 
  {
  	const id = this.route.snapshot.params['id'];
    this.title = this.posts.getAppareilById(+id).title;
    this.content = this.posts.getAppareilById(+id).content;
    this.id = this.posts.getAppareilById(+id).id;
    this.loveIts = this.posts.getAppareilById(+id).loveIts;
    this.created_at = this.posts.getAppareilById(+id).created_at;
  }

  onLove(n:number){
    this.loveIts=this.loveIts+1;
    this.posts.Love(n);
  }

  onDontLove(n:number){
    this.loveIts=this.loveIts-1;
    this.posts.DontLove(n);
  }

  onDeletePost(n:number){
    console.log('suppression d\'emement d\'id :'+n);
    this.posts.deletePost(n);
    this.router.navigate(['/posts']);

  }

}
