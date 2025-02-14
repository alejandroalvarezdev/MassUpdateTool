import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUpdateComponent } from './single-update.component';

describe('SingleUpdateComponent', () => {
  let component: SingleUpdateComponent;
  let fixture: ComponentFixture<SingleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
