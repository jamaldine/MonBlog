import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	@Input() created_at: Date;
	loveIts: number=0;
	
	constructor() { }

  	ngOnInit() {
  	}

}
