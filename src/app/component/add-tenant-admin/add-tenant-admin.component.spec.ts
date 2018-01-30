import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenantAdminComponent } from './add-tenant-admin.component';

describe('AddTenantAdminComponent', () => {
  let component: AddTenantAdminComponent;
  let fixture: ComponentFixture<AddTenantAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTenantAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTenantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
