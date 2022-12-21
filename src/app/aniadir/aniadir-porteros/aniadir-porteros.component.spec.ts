import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirPorterosComponent } from './aniadir-porteros.component';

describe('AniadirPorterosComponent', () => {
  let component: AniadirPorterosComponent;
  let fixture: ComponentFixture<AniadirPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirPorterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniadirPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
