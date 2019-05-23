import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  totalVotes = 0
  constructor() { }

  upVote = function () {
    this.totalVotes++
  }

  downVote = function () {
    this.totalVotes--
  }

}
