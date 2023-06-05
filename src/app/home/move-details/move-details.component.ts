import { Component } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.scss']
})
export class MoveDetailsComponent {
  id: any[] = []
  movieDetials: any[] = []
  constructor(private _MoviesService: MoviesService) {
    _MoviesService.getMoveDetails().subscribe((data) => {
      this.movieDetials = data.results
    })
  }
}
