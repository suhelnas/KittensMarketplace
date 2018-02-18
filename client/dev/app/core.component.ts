import {Component} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector:'core-component',
  templateUrl:'./core.component.html',
})

export class CoreComponent {
  constructor(private _router: Router){
  }
}
