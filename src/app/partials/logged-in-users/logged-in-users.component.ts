import { Component, OnInit } from '@angular/core';
import { LoggedinUsersService } from 'src/app/services/loggedin-users.service';

@Component({
  selector: 'app-logged-in-users',
  templateUrl: './logged-in-users.component.html',
})
export class LoggedInUsersComponent implements OnInit {

  loggedinUsers;

  constructor(private loggedinService: LoggedinUsersService) { }

  ngOnInit() {
    this.loggedinUsers = this.loggedinService.getUsers();
  }

}
