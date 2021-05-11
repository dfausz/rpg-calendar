import { Component, OnInit } from '@angular/core';

class Month {
  name: string;
  length: number;
  weekLength: number;
  weekdays: string[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  month: Month;
  
  constructor() {
    this.month = new Month();
    this.month.name = "Amuet";
    this.month.length = 28;
    this.month.weekLength = 7;
    this.month.weekdays = [
      "Edar",
      "Nannan",
      "Frahr",
      "Irthir",
      "Versel",
      "Faestir",
      "Vorel"
    ];
  }

  ngOnInit(): void {
  }

  getDaysArray(): number[] {
    let days = [];
    for(let i = 0; i < (this.month.length / this.month.weekLength); i++) {
      let week = [];
      for(let j = 1; j <= this.month.weekLength; j++) {
        week.push(j + (i * this.month.weekLength));
      }
      days.push(week);
    }
    return days;
  }

}
