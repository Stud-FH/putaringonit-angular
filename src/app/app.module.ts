import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgramComponent } from './pages/program/program.component';
import { TeamComponent } from './pages/team/team.component';
import { StoryComponent } from './pages/story/story.component';
import { IllustrationsComponent } from './pages/illustrations/illustrations.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTabsModule} from "@angular/material/tabs";
import { AccessControlComponent } from './access-control/access-control.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { WishEditorComponent } from './dialogs/wish-editor/wish-editor.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import { GiftEditorComponent } from './dialogs/gift-editor/gift-editor.component';
import { ProgramEditorComponent } from './dialogs/program-editor/program-editor.component';
import { InvitationEditorComponent } from './dialogs/invitation-editor/invitation-editor.component';
import { ProfileEditorComponent } from './dialogs/profile-editor/profile-editor.component';
import { DishSelectionEditorComponent } from './dialogs/dish-selection-editor/dish-selection-editor.component';
import { GuestsComponent } from './pages/guests/guests.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ScopeComponent } from './pages/scope/scope.component';
import { DishEditorComponent } from './dialogs/dish-editor/dish-editor.component';
import { MealComponent } from './pages/meal/meal.component';
import {MealEditorComponent} from "./dialogs/meal-editor/meal-editor.component";
import { GiftSummaryComponent } from './modules/gift-appreciation/gift-summary.component';
import {GiftConfirmationComponent} from "./dialogs/gift-confirmation/gift-confirmation.component";

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    TeamComponent,
    StoryComponent,
    IllustrationsComponent,
    GiftsComponent,
    ContactComponent,
    AccessControlComponent,
    WishEditorComponent,
    GiftEditorComponent,
    ProgramEditorComponent,
    MealEditorComponent,
    InvitationEditorComponent,
    ProfileEditorComponent,
    DishSelectionEditorComponent,
    GuestsComponent,
    ScopeComponent,
    DishEditorComponent,
    MealComponent,
    GiftSummaryComponent,
    GiftConfirmationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDialogModule,
    MatGridListModule,
    MatTableModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
