import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Router } from '@angular/router';

import {Post} from '../models/Post';
import {posts} from '../services/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	title: string;
	content: string;
	created_at: Date;
	loveIts: number=0;
  id: number;
	

	Posts:Post[]=[];
	postsSubscription: Subscription; 

	constructor(private posts: posts, private router:Router) { }

  	ngOnInit() {
  		this.postsSubscription=this.posts.appareilsSubject.subscribe(

  			(Posts:Post[])=>{
  				this.Posts=Posts;
  			}
  		);
  		this.posts.emitAppareilSubject();
  	}

    onDeletePost(){
    this.router.navigate(['/new']);

  }
  	
  	ngOnDestroy(){
  		this.postsSubscription.unsubscribe();
  	}

}