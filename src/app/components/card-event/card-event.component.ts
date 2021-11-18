import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventType } from '../../utils/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {

  // Variable for events
  public events: EventType[] = [];

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    // Get events
    this.getEvents();
  }

  /**
   * Method for intialize the array events
   */
  public async getEvents() {
    // Open try catch
    try {
      // Get events from data service
      this.events = await this._dataService.getEvents();
      this.events = this.events.filter(event => event.markets.length > 0);
    } catch (error) {
      // Show error
      console.error(error);
    }
  }

  /**
   * Method for refresh events with new changes
   */
  onRefreshEvents(){
    // Refresh events
    this.getEvents();
  }
}
