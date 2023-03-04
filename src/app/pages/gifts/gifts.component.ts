import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";
import {Wish} from "../../domain/wish/wish";
import {MatDialog} from "@angular/material/dialog";
import {GiftEditorComponent} from "../../dialogs/gift-editor/gift-editor.component";
import {GiftService} from "../../domain/gift/gift.service";
import {Gift} from "../../domain/gift/gift";
import {Context} from "../../domain/context";
import {GiftConfirmationComponent} from "../../dialogs/gift-confirmation/gift-confirmation.component";

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss', '../shared/grid-styles.scss']
})
export class GiftsComponent {

  @Input() profile!: Profile;
  @Input() context!: Context;

  constructor(private giftService: GiftService, public dialog: MatDialog) {}

  open(wish: Wish) {
    const matches = wish.gifts.filter(g => g.donorId == this.profile.identifier);
    const gift = matches.length? matches[0] : new Gift(this.context, {donorId: this.profile.identifier, wishId: wish.id});

    const dialogRef = this.dialog.open(GiftEditorComponent, {
      data: gift.update,
    });

    dialogRef.afterClosed().subscribe(submitted => {
      if (submitted) {
        if (!submitted.id) {
          this.giftService.create(submitted, this.profile)
            .subscribe(res => {
              const gift = this.context.registerGift(res);
              this.dialog.open(GiftConfirmationComponent, {data: gift});
            });
        } else if (submitted.value) {
          this.giftService.update(submitted, this.profile)
            .subscribe(res => this.context.registerGift(res));
        } else {
          this.giftService.delete(submitted, this.profile)
            .subscribe(res => this.context.unregisterGift(res));
        }
      }
    });
  }
}
