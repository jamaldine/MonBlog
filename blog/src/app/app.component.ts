import { Component,OnInit } from '@angular/core';

import {Post} from './post'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

	posts:Post[]=[
		new Post(
			'Mon premier post',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in malesuada lacus. Sed et tellus at lectus porta dapibus. In hac habitasse platea dictumst. Nam porttitor, odio vitae ultricies scelerisque, felis odio porta sapien, vel volutpat arcu tellus sit amet orci. Nam accumsan sem nec urna lacinia rhoncus. Pellentesque fermentum sodales neque vel tempor. Sed rhoncus nulla elit, sit amet tristique erat tempus nec. Donec eget massa sit amet ipsum suscipit finibus quis eu leo. Ut lacinia enim id nunc pellentesque, id facilisis eros sagittis. Sed vestibulum fermentum risus, sed ornare sapien tempor ac. Donec placerat nunc et laoreet feugiat. Etiam tristique lectus dolor, vel sagittis leo fermentum in. Sed sagittis feugiat dolor, vel laoreet est pulvinar eget. Quisque tempus erat velit. Duis vel semper libero. Proin cursus orci sed est rhoncus pretium.',
			0,
			new Date),
		new Post('Mon deuxième post',
			'Ut consectetur eget augue aliquet bibendum. Etiam consectetur ipsum vitae molestie facilisis. Morbi at erat efficitur, pretium mauris non, ullamcorper metus. Proin vehicula magna risus. Cras vitae pellentesque velit, vulputate bibendum nulla. Etiam sit amet nisl eros. Quisque non molestie quam. Phasellus maximus quam id hendrerit mollis. In elementum pellentesque tortor, non suscipit orci aliquet et. Vestibulum a scelerisque ligula.',
			0,
			new Date),
		new Post('Encore un post',
			'Sed lobortis mi in pretium placerat. Sed id dui turpis. Vivamus mollis pretium ante a euismod. Aenean sed libero consectetur, malesuada velit a, blandit quam. Donec gravida lacus ex, eu euismod ante feugiat id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam blandit ligula mi, id ullamcorper nisi pharetra quis. Morbi ac arcu scelerisque, porta neque ut, sodales purus. Nullam sit amet viverra justo. Etiam sed euismod ex. Aliquam erat volutpat. Fusce elementum, purus et posuere fermentum, ex nibh porttitor odio, ac pretium ligula ipsum eu diam. Pellentesque suscipit libero nec nisl dictum auctor. Mauris rutrum ante sed fermentum bibendum.',
			0,
			new Date)
	]; 
  	
  	constructor(){}
  	
  	ngOnInit(){
  		
  	}
}
