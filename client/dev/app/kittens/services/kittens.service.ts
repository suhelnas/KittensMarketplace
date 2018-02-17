import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class KittensService {
  public static BASEURL = 'http://localhost:8080';
  constructor(private _http: HttpClient){

  }
  addNewKitten(data): any{
    return this._http.post(KittensService.BASEURL+ '/add/kitten',data);
  }
}
