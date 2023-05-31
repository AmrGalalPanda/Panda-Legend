import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  moveDetails: any[] = []
  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getTrending().subscribe((data) => {
      this.moveDetails = data.results
    })
  }
}
