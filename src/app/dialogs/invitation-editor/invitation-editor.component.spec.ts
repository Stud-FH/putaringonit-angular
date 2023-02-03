import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationEditorComponent } from './invitation-editor.component';

describe('InvitationEditorComponent', () => {
  let component: InvitationEditorComponent;
  let fixture: ComponentFixture<InvitationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
