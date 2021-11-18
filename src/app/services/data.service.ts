import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BetslipItem, EventType } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Name data LS
  public readonly LS_NAME = 'betslip';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method for get data from API
   * 
   * @return Promise<EventType[]>
   */
  public getEvents(): Promise<EventType[]>{
    // Returns an promise with data
    return this.http.get<EventType[]>(
      'http://www.mocky.io/v2/59f08692310000b4130e9f71'
    ).toPromise();
  }

  /**
   * Method for save a selection in local storage
   */
  public saveSelection(selection: BetslipItem): void{
    // Variable for betslip data
    let betslip: BetslipItem[] = [];
    // Get betlip in LS
    if(localStorage.getItem(this.LS_NAME)){
      const dataLS: any = localStorage.getItem(this.LS_NAME)
      betslip = JSON.parse(dataLS);
    }
    // Add a new selection to betslip
    betslip.push(selection);

    // Save betslip in local storage
    localStorage.setItem(this.LS_NAME, JSON.stringify(betslip));
  }

}
