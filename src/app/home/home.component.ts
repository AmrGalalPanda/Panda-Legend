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
  tandingMove: any[] = [];
  pages:number[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.pages=new Array(10).fill(0).map((x,i)=>i);
    this._MoviesService.getMovePagnition(1).subscribe((data) => {
      this.tandingMove = data.results
    })
    
  }
   
}
