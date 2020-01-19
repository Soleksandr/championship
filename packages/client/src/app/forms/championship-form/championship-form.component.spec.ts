import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { ChampionshipFormComponent } from './championship-form.component';

describe('ChampionshipFormComponent', () => {
  let component: ChampionshipFormComponent;
  let fixture: ComponentFixture<ChampionshipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionshipFormComponent],
      imports: [
        FormBuilder,
        ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
