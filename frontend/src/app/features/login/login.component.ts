import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthOutcome, UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  authOutcome? : AuthOutcome;

  constructor(private userService: UserService, private router: Router) {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const user = this.loginForm.value;
    console.log(user);
    
    this.userService.login(user).then((authOutcome: AuthOutcome) => {
      this.authOutcome = authOutcome;
      if(authOutcome == AuthOutcome.Success){
        this.router.navigate(['/home']);
      }
    }).catch((authOutcome: AuthOutcome) => {
      this.authOutcome = authOutcome;
    });
  }
}
