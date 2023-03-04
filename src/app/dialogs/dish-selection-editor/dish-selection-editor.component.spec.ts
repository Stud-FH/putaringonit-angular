import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishSelectionEditorComponent } from './dish-selection-editor.component';

describe('MenuSelectionEditorComponent', () => {
  let component: DishSelectionEditorComponent;
  let fixture: ComponentFixture<DishSelectionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishSelectionEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishSelectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
