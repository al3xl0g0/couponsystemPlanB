import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router : Router) { 
    this.gohome();
  }

  gohome(){
    this.router.navigateByUrl('Home');
  }
}

