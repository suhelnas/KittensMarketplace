import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:'top-bar',
  templateUrl:'./topbar.component.html'
})
export class TopbarComponent{

  constructor(private _router: Router) {
    this._router.navigate(['/app/item/list'])
  }
}


