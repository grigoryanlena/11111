import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayDaysService {
  emptyStr:string[]=[]
  date:Date=new Date
  day:any=this.date.getDay()

  constructor() { }

  displayDays(){
    console.log(this.day)
    for(let j = 2; j < this.day; j++){
      this.emptyStr.push(" ")
    }
  }
}
