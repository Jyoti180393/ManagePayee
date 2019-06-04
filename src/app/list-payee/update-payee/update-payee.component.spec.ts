import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayeeComponent } from './update-payee.component';

describe('UpdatePayeeComponent', () => {
  let component: UpdatePayeeComponent;
  let fixture: ComponentFixture<UpdatePayeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePayeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
