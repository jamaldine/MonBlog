import { Component, OnInit, Input } from '@angular/core';

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

	onLove(){
		this.loveIts=this.loveIts+1;
	}

	onDontLove(){
		this.loveIts=this.loveIts-1;
	}


  constructor() { }

  ngOnInit() {
  }

}
