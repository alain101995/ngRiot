import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampmComponent } from './champm.component';

describe('ChampmComponent', () => {
  let component: ChampmComponent;
  let fixture: ComponentFixture<ChampmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
