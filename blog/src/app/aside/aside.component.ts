import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  suivre()
  {
  	const ele = document.getElementById('suivre');
    ele.style.border = '0px solid white';
  	ele.innerHTML='suivis';
    ele.style.backgroundColor='white';
    ele.style.border='1px solid white';
  }
}
