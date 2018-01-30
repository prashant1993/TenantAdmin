import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAdminDashboardComponent } from './tenant-admin-dashboard.component';

describe('TenantAdminDashboardComponent', () => {
  let component: TenantAdminDashboardComponent;
  let fixture: ComponentFixture<TenantAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
