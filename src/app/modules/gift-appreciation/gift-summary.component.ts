import {Component, Input} from '@angular/core';
import {Gift} from "../../domain/gift/gift";

@Component({
  selector: 'app-gift-summary',
  templateUrl: './gift-summary.component.html',
  styleUrls: ['./gift-summary.component.scss']
})
export class GiftSummaryComponent {

  @Input()
  gift!: Gift;

  @Input()
  specifyWish = true;

  get contributionText() {
    let status;
    switch (this.gift.status) {
      case 'Reserved':
        status = 'reserviert';
        break;
      case 'Paid':
        status = 'finanziert';
        break;
      case 'Delivered':
        status = 'beigetragen';
        break;
      default: return '';
    }

    let value;
    switch(this.gift.wish.unit) {
      case 'CHF':
        value = `CHF ${this.gift.value}`;
        break;
      case 'Piece':
        value = `${this.gift.value} Stück`;
        break;
      default: return '';
    }

    return this.specifyWish
      ? `Du hast ${value} für ${this.gift.wish.title} ${status}.`
      : `Du hast ${value} ${status}.`;
  }

  get furtherInfoText() {
    const wish = this.gift.wish;

    return 'Sobald der gesamte Betrag beisammen ist, werden sich unsere Brautführer bei dir melden.';

    // TODO
    // if (this.gift.status === 'Delivered') {
    //   return '';
    // }
    //
    // if (!wish.value) {
    //   switch (this.gift.status) {
    //
    //   }
    // }
    // if (wish.value && wish.accumulated < wish.value) {
    //   return 'Sobald der gesamte Betrag beisammen ist, werden sich unsere Brautführer bei dir melden.';
    // }
    // return '';
  }

}
