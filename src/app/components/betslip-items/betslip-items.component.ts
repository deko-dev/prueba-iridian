import { Component, OnInit } from '@angular/core';
import { BetslipItem } from '../../utils/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-betslip-items',
  templateUrl: './betslip-items.component.html',
  styleUrls: ['./betslip-items.component.scss']
})
export class BetslipItemsComponent implements OnInit {

  // Get betslip items
  public betslipItems: BetslipItem[] = [];
  
  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    // Load betslip items
    this.loadBetslip();
  }

  /**
   * Method for load betslip items
   */
  loadBetslip(){
    // Validate if exists betslip data in LS
    if(localStorage.getItem(this._dataService.LS_NAME)){
      // Validate if exists selectionId in Data LS
      const dataLS: any = localStorage.getItem(this._dataService.LS_NAME);
      // Parse data to object
      this.betslipItems = JSON.parse(dataLS);
    }
  }

  /**
   * Method for remove betslip item
   */
  onDeleteBetslip(betslip: BetslipItem){
    // Remove betslip item
    this.betslipItems = this.betslipItems.filter(item => item.id !== betslip.id);
    // Update LS
    localStorage.setItem(this._dataService.LS_NAME, JSON.stringify(this.betslipItems));
  }

}
