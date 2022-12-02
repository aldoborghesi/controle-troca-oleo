import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltrocasComponent } from './totaltrocas.component';

describe('TotaltrocasComponent', () => {
  let component: TotaltrocasComponent;
  let fixture: ComponentFixture<TotaltrocasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltrocasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotaltrocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
