import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { posts } from '../services/posts.service'
import { Post } from '../models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private posts : posts) { }
  nbrPosts:number=0;
  Posts:Post[]=[];
  postsSubscription: Subscription; 

  ngOnInit() {

  	this.postsSubscription=this.posts.appareilsSubject.subscribe(

  			(Posts:Post[])=>{
  				this.Posts=Posts;
  			}
  		);
  		this.posts.emitAppareilSubject();

  		this.nbrPosts=this.posts.getPostsNbre();

  }

  ngOnDestroy(){
  	this.postsSubscription.unsubscribe();
  }

}
