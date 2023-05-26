import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentContainerComponent } from './comment-container.component';

describe('CommentContainerComponent', () => {
  let component: CommentContainerComponent;
  let fixture: ComponentFixture<CommentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentContainerComponent]
    });
    fixture = TestBed.createComponent(CommentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
