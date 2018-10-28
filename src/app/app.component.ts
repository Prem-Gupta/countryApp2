import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decision-point-assignment';

  constructor(
    private _route: ActivatedRoute,
    private router: Router) {
  }
  
  
  public countryName()
  {
    this.router.navigate(['/countryName'])
  }

  public countryISO()
  {
    this.router.navigate(['/countryIso'])
  }
}
