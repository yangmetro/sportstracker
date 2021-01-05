import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { getData } from '../sports-feed/sports-feed.js'

let headers = new HttpHeaders({ "Authorization": "Basic " + btoa('dpduganwood' + ":" + 'launchpad19') });
let url = 'https://api.mysportsfeeds.com/v2.1/pull/nba/latest/games.json?date=since-1-months-ago';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {

  constructor() { console.log("dkfjkdjf")}

  public getRequestedGames() {
    //getData();
    console.log("got here1")
    console.log("got here2")
  }
  // public getRequestedGames() {
  //   console.log("function called")
  //   let base = this.http.get(url, { headers: headers})
  //   console.log("gets here")
  //   const requestedData = base.pipe(
  //     map((data) => {
  //       console.log("DATA!!! ", data)
  //       return data;
  //     })
  //   );
  //   return requestedData;
  // }
}
