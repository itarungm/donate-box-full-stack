import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFormComponent } from './donate-form.component';

describe('DonateFormComponent', () => {
  let component: DonateFormComponent;
  let fixture: ComponentFixture<DonateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
