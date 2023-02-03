import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishEditorComponent } from './wish-editor.component';

describe('WishEditorComponent', () => {
  let component: WishEditorComponent;
  let fixture: ComponentFixture<WishEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
