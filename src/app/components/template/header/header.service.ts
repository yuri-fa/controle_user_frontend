import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

private _headerData = new BehaviorSubject<HeaderData>({
  title : "Inico",
  icone :"person_add",
  router : ""
});

  constructor() { }

  get headerData(): HeaderData{
    return this._headerData.value
  }

  set headerData(headerData : HeaderData){
    this._headerData.next(headerData);
  }

}
