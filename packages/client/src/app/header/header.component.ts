import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/store/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logout() {
    this.userService.logout();
  }
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
