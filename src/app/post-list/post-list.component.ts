import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post = {
    author: 'author',
    permlink: 'permlink',
    tag: 'tag',
    votes: 12,
    payout: '1.251 SBD'.split(' ')[0],
    comments: 5
  }

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.post.votes += 1
  }
}
