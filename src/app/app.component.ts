import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Blog Posts';
  postID = 1;

  posts = [
    {
      id: this.postID++,
      title: 'Happy New Year',
      content: 'We wish you great angular achievements this year.',
      loveIts: 0,
      createdAt: new Date(2019, 0, 1, 0, 1)
    },
    {
      id: this.postID++,
      title: 'Ongoing.',
      content: 'Blog development with AngularJS.',
      loveIts: 0,
      createdAt: new Date(2019, 1, 15, 16, 10)
    },
    new Post(this.postID++, "Bonus", "Post is now an external class.")
  ]

}
