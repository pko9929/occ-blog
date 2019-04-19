import { Component, Input, OnInit } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';
import { AppComponent } from '../app.component';
import { Post } from '../post'


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() postList;
  @Input() postId;
  aTitle: string;
  aContent: string;


  constructor() { }

  ngOnInit() {
  }

  onNewPost()
  {
    this.postList.push(new Post(this.postId++,
                                this.aTitle ? this.aTitle : "Generated Post Title",
                                this.aContent ? this.aContent : "This is an auto generated post content !",
                                new Date()));
    this.aTitle = '';
    this.aContent = '';
  }
}


