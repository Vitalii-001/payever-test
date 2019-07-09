import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  @Input() user: UserInterface;

  ngOnChanges(changes) {
    if (changes.user.currentValue) {
      // this.parent.user = { ...changes.user.currentValue.data }
      this.user = { ...changes.user.currentValue.data }
    }

  }

}
