import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSliderComponent } from './home/main-slider/main-slider.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { VoteChartComponent } from './vote-chart/vote-chart.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    NavbarComponent,
    MainSliderComponent,
    ContactUsComponent,
    SignInComponent,
    RegisterComponent,
    NotFoundComponent,
    VoteChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
