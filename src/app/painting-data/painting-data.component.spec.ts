import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDataComponent } from './painting-data.component';

describe('PaintingDataComponent', () => {
  let component: PaintingDataComponent;
  let fixture: ComponentFixture<PaintingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintingDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaintingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
