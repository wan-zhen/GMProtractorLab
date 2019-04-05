import { Component, OnInit, NgZone } from '@angular/core';
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
  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        // 再加回 ngZone 不然畫面不會被通知變更
        // 假設原本就這樣寫 就不會讓 angular 一直有 change 的監聽
        this.ngZone.run(() => {
          this.canSend = true;
        });
      }, 2000);
    });
  }

  ngOnInit() {}
  onSubmit() {
    if (this.profileForm.value.account) {
      alert('新增成功');
      this.success = true;
    }
  }
}
