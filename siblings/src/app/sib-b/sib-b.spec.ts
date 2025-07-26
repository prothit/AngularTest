import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibB } from './sib-b';

describe('SibB', () => {
  let component: SibB;
  let fixture: ComponentFixture<SibB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SibB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SibB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
