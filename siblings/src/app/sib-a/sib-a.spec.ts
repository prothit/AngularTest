import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibA } from './sib-a';

describe('SibA', () => {
  let component: SibA;
  let fixture: ComponentFixture<SibA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SibA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SibA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
