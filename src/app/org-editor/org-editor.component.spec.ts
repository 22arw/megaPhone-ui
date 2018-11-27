import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgEditorComponent } from './org-editor.component';

describe('OrgEditorComponent', () => {
  let component: OrgEditorComponent;
  let fixture: ComponentFixture<OrgEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
