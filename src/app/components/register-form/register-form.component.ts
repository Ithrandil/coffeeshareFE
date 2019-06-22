import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  profileForm;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern(this.password), DONT WORK USE A REGEX INCLUDING LETTER NUMBER ETC TO PUT ALSO ON PASSWORD AND VALIDATE ON HTML
      ]),
    });
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.userService.createUser(this.profileForm.value).subscribe(result => console.log(result));
    // this.httpClient.send(this.profileForm.value);
  }
}
