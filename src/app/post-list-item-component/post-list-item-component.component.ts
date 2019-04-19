import { Component, Input, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post;
  
  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts ++;
    console.log('Liked :-) !' + this.post.loveIts);
  }

  onDislike() {
    this.post.loveIts --;
    console.log('Disliked :-( !' + this.post.loveIts);
  }

}
