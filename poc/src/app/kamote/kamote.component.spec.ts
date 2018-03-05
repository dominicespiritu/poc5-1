import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamoteComponent } from './kamote.component';

describe('KamoteComponent', () => {
  let component: KamoteComponent;
  let fixture: ComponentFixture<KamoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
