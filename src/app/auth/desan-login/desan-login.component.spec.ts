import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesanLoginComponent } from './desan-login.component';

describe('DesanLoginComponent', () => {
  let component: DesanLoginComponent;
  let fixture: ComponentFixture<DesanLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesanLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
