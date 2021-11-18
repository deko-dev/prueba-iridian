import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BetslipItem, MarketType, SelectionType } from '../../utils/interfaces';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  // Get market data from parent component
  @Input() market!: MarketType;

  // Emit event to parent component
  @Output() refreshEvents: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Method for selecting a selection
   */
  onSelection(selection: SelectionType): void {
    // Create constant for create betslip item
    const dataSave = {
      id: selection.id,
      name: `${this.market.name} - ${selection.name}`,
      price: selection.price
    }
    // Save betslip item
    this._dataService.saveSelection(dataSave);
    // Emit event to parent component for update events
    this.refreshEvents.emit(true)
  }

  /**
   * Method for search a selection in betslip data LS
   */
  searchSelectionInBetslip(selectionId: string): boolean {
    // Variable return boolean
    let exists = false;
    // Validate if exists data in LS
    if(!localStorage.getItem(this._dataService.LS_NAME)){
      exists = false;
    }else {
      // Validate if exists selectionId in Data LS
      const dataLS: any = localStorage.getItem(this._dataService.LS_NAME);
      // Parse data to object
      const betslip: BetslipItem[] = JSON.parse(dataLS);
      // Validate if exists selectionId in betslip
      const selection = betslip.find( betslip => betslip.id === selectionId );
      // Validate if exists selectionId in betslip
      exists = selection ? true : false;
    }

    // Return exists
    return exists;
  }

}
