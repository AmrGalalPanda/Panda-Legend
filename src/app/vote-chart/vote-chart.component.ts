import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-chart',
  templateUrl: './vote-chart.component.html',
  styleUrls: ['./vote-chart.component.scss']
})
export class VoteChartComponent {
  @Input() voteCount:any= Number;
  @Input() maxVotes:any= Number;

  getStarRating(): string[] {
    const rating = Math.round((this.voteCount / this.maxVotes) * 5);
    return Array(rating).fill('star');
  }
}
