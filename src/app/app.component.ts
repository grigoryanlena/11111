import {Component, NgIterable, OnInit} from '@angular/core';
import {ChangeMonthService} from "./change-month.service";
import {DisplayDaysService} from "./display-days.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 constructor(public changeMonthService:ChangeMonthService,
             public displayDaysService:DisplayDaysService,
 ) {
 }

  dateString : string = new Date().toDateString();
  lastDay: any = new Date(this.changeMonthService.date.getFullYear(), this.changeMonthService.date.getMonth()+1,0).getDate()
  lastDayArr=new Array(this.lastDay)

  ngOnInit() {
    this.displayDaysService.displayDays()
    // console.log(this.lastDay)
    // console.log(this.lastDayArr)
  }
}


