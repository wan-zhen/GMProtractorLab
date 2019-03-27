import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    account: new FormControl(''),
    password: new FormControl('')
  });
  success: boolean;
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    this.success =
      this.profileForm.value.account === 'zhen' &&
      this.profileForm.value.password === '123456';
  }
  signOut() {
    location.reload();
  }
}
