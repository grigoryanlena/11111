import { Injectable } from '@angular/core';
import {DisplayDaysService} from "./display-days.service";

@Injectable({
  providedIn: 'root'
})
export class ChangeMonthService {

  constructor(private displayDayService:DisplayDaysService) { }
  monthArr:string[]=[
    'January', 'February',
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October',
    'November',  'December'
  ]

  date:Date=new Date;
  num:number=1
  month:string=this.monthArr[this.date.getMonth()]
  monthNumber:number=this.date.getMonth()+1          //July
  year:number=this.date.getFullYear()                //2022
  changeMonth(){
    if (this.monthNumber===12) {
      this.monthNumber = 0
      this.year += 1
      this.month = this.monthArr[this.date.getMonth() - 11]
    }
    this.month=this.monthArr[this.monthNumber++]
    let prevMonth =new Date(this.date.getFullYear(), this.date.getMonth() + this.num++, 1);
    this.displayDayService.day=prevMonth.getDay()
    this.displayDayService.emptyStr=[]
    this.displayDayService.displayDays()
    // console.log(this.displayDayService.day)
  }


   monthNumbers:number=this.date.getMonth()-1
   years:number=this.date.getFullYear()
  changeMonthPrev(){
    if (this.monthNumbers === 1){
      this.monthNumbers = 13
      this.years -= 1
      this.month = this.monthArr[this.date.getMonth() + 11]
    }
    this.month = this.monthArr[--this.monthNumbers -1]
    let nextMonth = new Date(this.date.getFullYear(), this.date.getMonth() - this.num--, 1)
    this.displayDayService.day = nextMonth.getDay()
    this.displayDayService.emptyStr = []
    this.displayDayService.displayDays()
  }
}
