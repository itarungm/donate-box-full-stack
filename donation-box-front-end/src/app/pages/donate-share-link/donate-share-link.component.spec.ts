import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateShareLinkComponent } from './donate-share-link.component';

describe('DonateShareLinkComponent', () => {
  let component: DonateShareLinkComponent;
  let fixture: ComponentFixture<DonateShareLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateShareLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateShareLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
