import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftEditorComponent } from './gift-editor.component';

describe('GiftEditorComponent', () => {
  let component: GiftEditorComponent;
  let fixture: ComponentFixture<GiftEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
