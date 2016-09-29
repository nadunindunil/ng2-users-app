import { Component, OnInit } from '@angular/core';
import { UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService] // importatnt : dependency injection 
})
export class UsersComponent implements OnInit {
  private name;
  private Users;

  // get Users list
  getUsers(): void {
    this.Users = this.usersService.getUsers();
  }

  // importatnt : dependency injection
  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.name = "Users";
    this.getUsers();
  }

}
