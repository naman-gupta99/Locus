import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPanelComponent } from './brand-panel.component';

describe('BrandPanelComponent', () => {
  let component: BrandPanelComponent;
  let fixture: ComponentFixture<BrandPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
