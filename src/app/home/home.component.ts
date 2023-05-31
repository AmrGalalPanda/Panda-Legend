import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { VoteChartComponent } from '../vote-chart/vote-chart.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  vote_averag: number[] = [];
  tandingMove: any[] = []
  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrending().subscribe((data) => {
      this.tandingMove = data.results
    })
  }
}
