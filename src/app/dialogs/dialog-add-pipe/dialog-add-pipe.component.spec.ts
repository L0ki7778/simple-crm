import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPipeComponent } from './dialog-add-pipe.component';

describe('DialogAddPipeComponent', () => {
  let component: DialogAddPipeComponent;
  let fixture: ComponentFixture<DialogAddPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
