import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class KittensService {
  public static BASEURL = 'http://localhost:8080';

  constructor(private _http: HttpClient) {

  }

  addNewKitten(data): any {
    let that = this;
    return new Promise(function (resolve, reject) {
      return that._http.post( '/api/add/kitten', data).subscribe(function (data) {
          resolve(data)
        },
        function (err) {
          reject(err)
        });
    })
  }

  getList(): any {
    let that = this;
    return new Promise(function (resolve, reject) {
      that._http.get('/api/kitten/list').subscribe(function (data) {
              resolve(data);
      },function (err) {
        reject(err)
      });


    });
  }
  buyKitten(id):any {
    let that = this;
    return new Promise(function (resolve, reject) {
      that._http.get('/api/buy/kitten/'+id).subscribe(function (data) {
        resolve(data);
      },function (err) {
        reject(err)
      });


    });
  }
}
