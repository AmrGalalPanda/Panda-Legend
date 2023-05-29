import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
window.addEventListener('scroll', function() {
  const navba:any = document.getElementById('navsTop');

  if (window.pageYOffset > 0) {
    navba.classList.add('scrolled');
  } else {
    navba.classList.remove('scrolled');
  }
});
