import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignUpComponent } from './sign-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/store/user/user.service';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatInputModule,
      ],
      providers: [{ provide: UserService }],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have proper header', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toContain('Sign Up');
  });

  it('should have proper header', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toContain('Sign Up');
  });

  it('should not display validation errors initially', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#email-validate')).nativeElement.hidden).toEqual(true);
    expect(fixture.debugElement.query(By.css('#password-validate')).nativeElement.hidden).toEqual(true);
    expect(fixture.debugElement.query(By.css('#confirm_password-validate')).nativeElement.hidden).toEqual(true);
  });

  it('should be rendered with disabled submit button', async(() => {
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('[type="submit"')).nativeElement;

    expect(button.disabled).toEqual(true);
  }));

  it('should validate empty fields', async(() => {
    const inputEmail = fixture.debugElement.query(By.css('[name="email"]')).nativeElement;
    const inputPassword = fixture.debugElement.query(By.css('[name="password"]')).nativeElement;
    const inputConfirmPassword = fixture.debugElement.query(By.css('[name="confirmPassword"]')).nativeElement;

    inputEmail.dispatchEvent(new Event('blur'));
    inputPassword.dispatchEvent(new Event('blur'));
    inputConfirmPassword.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#email-validate')).nativeElement.hidden).toEqual(false);
    expect(fixture.debugElement.query(By.css('#password-validate')).nativeElement.hidden).toEqual(false);
    expect(fixture.debugElement.query(By.css('#confirm_password-validate')).nativeElement.hidden).toEqual(false);
  }));

  it('should display proper validation error for inequality password', async(() => {
    const inputPassword = fixture.debugElement.query(By.css('[name="password"]')).nativeElement;
    const inputConfirmPassword = fixture.debugElement.query(By.css('[name="confirmPassword"]')).nativeElement;

    inputPassword.value = 'password';
    inputConfirmPassword.value = 'another';

    inputPassword.dispatchEvent(new Event('input'));
    inputConfirmPassword.dispatchEvent(new Event('input'));
    inputConfirmPassword.dispatchEvent(new Event('blur'));

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#confirm_password-validate')).nativeElement.innerText).toEqual(
      'Confirm password must be the same as password',
    );
  }));
});

// TODO add tests for submit
