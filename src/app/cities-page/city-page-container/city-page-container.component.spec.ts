import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPageContainerComponent } from './city-page-container.component';

describe('CityPageContainerComponent', () => {
  let component: CityPageContainerComponent;
  let fixture: ComponentFixture<CityPageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityPageContainerComponent]
    });
    fixture = TestBed.createComponent(CityPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
