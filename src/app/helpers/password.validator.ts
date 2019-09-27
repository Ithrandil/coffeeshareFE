import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const userControl = control.get('password');
  const password = userControl.value;
  const passwordHasError = userControl.errors;
  const confirmPassword = control.get('confirmPassword').value;
  const errors = {};

  if (password === confirmPassword && password.length !== 0 && !passwordHasError) {
    control.get('confirmPassword').setErrors(null);
    return null;
  } else if (password !== confirmPassword && confirmPassword.length !== 0) {
    control.get('confirmPassword').setErrors({ PasswordsDifferent: true });
    return errors;
  }
}
