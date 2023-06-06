import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrls: ['./move-details.component.scss']
})
export class MoveDetailsComponent {
  id: string = ''
  movieDetials:any;
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService: MoviesService) {
    this.id= this._ActivatedRoute.snapshot.params['id'];
    
    _MoviesService.getMoveDetails(this.id).subscribe({
      next:(respons)=>this.movieDetials=respons
    })
  }
}
