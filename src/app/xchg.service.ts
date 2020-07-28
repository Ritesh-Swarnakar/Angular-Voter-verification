import { Injectable } from '@angular/core';


@Injectable()
export class XchgService {
  nm:string
  ag:number

  constructor() { }

  onClick(name){
    return this.nm=name}

  onClk(age){
    return this.ag=age
  }

}