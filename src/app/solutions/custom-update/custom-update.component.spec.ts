import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUpdateComponent } from './custom-update.component';

describe('CustomUpdateComponent', () => {
  let component: CustomUpdateComponent;
  let fixture: ComponentFixture<CustomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
