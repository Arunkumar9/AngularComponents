import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDMenuTreeComponent } from './mdmenu-tree.component';

describe('MDMenuTreeComponent', () => {
  let component: MDMenuTreeComponent;
  let fixture: ComponentFixture<MDMenuTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDMenuTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDMenuTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
