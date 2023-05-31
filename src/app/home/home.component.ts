import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tandingMove:any[] =[]
constructor(private _MoviesService:MoviesService)
{
  _MoviesService.getTrending().subscribe((data)=>{
    this.tandingMove =data.results
  })
}
}
