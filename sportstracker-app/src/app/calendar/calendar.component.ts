import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';
import { getData } from '../home/test'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  eventClicked: boolean
  hTeams: any
  vTeams: any
  hLogos: any
  vLogos: any
  gameDate: any

  @Input()
      set configurations(config: any) {
         if(config) {
            this.defaultConfigurations = config;  
         }
      }
  @Input() eventData: any;
    defaultConfigurations: any;

  constructor() {
    this.eventClicked = false
    this.defaultConfigurations = {

    editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      views: {
        agenda: {
            eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.eventData,
      dayClick: (date, jsEvent, activeView) => {
        this.dayClick(date, jsEvent, activeView);
      },
      eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStart(
            timeSheetEntry, jsEvent, ui, activeView
        );
      },
      eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStop(
          timeSheetEntry, jsEvent, ui, activeView
        );
      },
    };
  }

  ngOnInit() { 
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations
  );
  }

  dayClick(date, jsEvent, activeView) {
    console.log(date)
    this.hTeams = getData(this.formatDate(date)).hTeams
    this.vTeams = getData(this.formatDate(date)).vTeams
    this.hLogos = getData(this.formatDate(date)).hLogos
    this.vLogos = getData(this.formatDate(date)).vLogos
    this.gameDate = date.format('MMMM D')
    this.eventClicked = true

    console.log('day click');
  }
  eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
  }
  eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
  }

  formatDate(date) {
    console.log(date)
    var month = '' + (date.month() + 1),
        day = '' + date.date(),
        year = date.year();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    console.log(day)
    return [year, month, day].join('-');
  }
}
