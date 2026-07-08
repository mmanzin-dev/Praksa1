import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExample } from './directive-example';

describe('DirectiveExample', () => {
  let component: DirectiveExample;
  let fixture: ComponentFixture<DirectiveExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveExample],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
