import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSignedIn = false;
  constructor(private userService: UserService) {
    this.isSignedIn = this.userService.isLoggedIn();
  }
}
