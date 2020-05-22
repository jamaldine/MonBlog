import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { posts } from '../services/posts.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() title:string;
	@Input() content:string;
	@Input() created_at:Date;
	@Input() loveIts:number;
	@Input() id:number;

	onLove(n:number){
		this.loveIts=this.loveIts+1;
		this.post.Love(n);
	}

	onDontLove(n:number){
		this.loveIts=this.loveIts-1;
		this.post.DontLove(n);
	}

	onDeletePost(n:number){
		console.log('suppression d\'emement d\'id :'+n);
		this.post.deletePost(n);
		this.router.navigate(['/posts']);
		this.router.navigate(['']);
	}

  constructor(private post: posts, private router: Router) { }

  ngOnInit() { }

}
