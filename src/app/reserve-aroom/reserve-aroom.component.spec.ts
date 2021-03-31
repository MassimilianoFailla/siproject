import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveARoomComponent } from './reserve-aroom.component';

describe('ReserveARoomComponent', () => {
  let component: ReserveARoomComponent;
  let fixture: ComponentFixture<ReserveARoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveARoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveARoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
