import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddialogcontentComponent } from './carddialogcontent.component';

describe('CarddialogcontentComponent', () => {
  let component: CarddialogcontentComponent;
  let fixture: ComponentFixture<CarddialogcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddialogcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddialogcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
