import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from './card-event/card-event.component';
import { MarketComponent } from './market/market.component';
import { SharedModule } from '../shared/shared.module';
import { BetslipItemsComponent } from './betslip-items/betslip-items.component';



@NgModule({
  declarations: [
    CardEventComponent,
    MarketComponent,
    BetslipItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardEventComponent,
    MarketComponent,
    BetslipItemsComponent
  ]
})
export class ComponentsModule { }
