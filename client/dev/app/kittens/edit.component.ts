import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {KittensService} from './services/kittens.service';

@Component({
  selector:'edit-component',
  templateUrl:'edit.component.html'
})


export class EditComponent {
  postModel: any = {
    Price: null,
    Age: null
  }
formData;
  constructor(private _router: Router,private _kittensService: KittensService) {

  }

  getFiles(fileInput) {
    let fileList: FileList = fileInput.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.formData = new FormData();
      this.formData.append('file', file, file.name);
      this.formData.append('Price',this.postModel.Price);
      this.formData.append('Age',this.postModel.Age)
    }
    console.log(this.postModel)

  }

    submitForm(value) {
    console.log(this.postModel);
    console.log(value);
      this.postModel.Image=null;
    let promise = this._kittensService.addNewKitten(this.formData)
     promise.subscribe(function (result) {
       this._router.navigate(['/app'])
     },function (err) {
     });
    }
}
