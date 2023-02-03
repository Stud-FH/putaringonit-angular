import {Component, Input} from '@angular/core';
import {Profile} from "../../domain/profile/profile";
import {Wish} from "../../domain/wish/wish";
import {MatDialog} from "@angular/material/dialog";
import {GiftEditorComponent} from "../../dialogs/gift-editor/gift-editor.component";
import {GiftService} from "../../domain/gift/gift.service";
import {Gift} from "../../domain/gift/gift";
import {Context} from "../../domain/context";

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
        if (submitted.id) {
          this.giftService.update(submitted)
            .subscribe(this.context.registerGift);
        } else {
          this.giftService.create(submitted)
            .subscribe(this.context.registerGift);
        }
      }
    });
  }
}
