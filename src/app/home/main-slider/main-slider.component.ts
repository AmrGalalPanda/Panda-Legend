import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };
  
  tandingMove:any[] =[]
constructor(private _MoviesService:MoviesService)
{
  _MoviesService.getTrending().subscribe((data)=>{
    this.tandingMove =data.results
  })
}
}
