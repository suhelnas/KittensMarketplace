import {Component} from '@angular/core';
import {KittensService} from './services/kittens.service';
import {Router} from '@angular/router';

@Component({
  selector:'kitten-list',
  templateUrl:'kitten.list.component.html'
})

export class KittenListComponent {
  kittenList;
constructor( private _router: Router,private _kittensService: KittensService){

}
ngOnInit(){
  let that = this;
  let promise = this._kittensService.getList()
    promise.then(function(result){
      that.kittenList =result.data
    })
}
addKitten(){
  this._router.navigate(['/app/add/kitten'])
}
buy(id){
  let that = this;
  let promise = this._kittensService.buyKitten(id);
  promise.then(function(result){
    window.location.reload();
  })
}
}
