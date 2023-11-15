import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCompoComponent } from './demo-compo.component';

describe('DemoCompoComponent', () => {
  let component: DemoCompoComponent;
  let fixture: ComponentFixture<DemoCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
