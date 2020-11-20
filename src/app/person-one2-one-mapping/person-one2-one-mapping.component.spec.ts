import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonOne2OneMappingComponent } from './person-one2-one-mapping.component';

describe('PersonOne2OneMappingComponent', () => {
  let component: PersonOne2OneMappingComponent;
  let fixture: ComponentFixture<PersonOne2OneMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonOne2OneMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOne2OneMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
