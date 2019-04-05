import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  profileForm = new FormGroup({
    account: new FormControl('')
  });
  success: boolean;
  canSend: boolean;
  constructor() {
    setTimeout(() => {
      this.canSend = true;
    }, 8000);
  }

  ngOnInit() {}
  onSubmit() {
    if (this.profileForm.value.account) {
      alert('新增成功');
      this.success = true;
    }
  }
}
