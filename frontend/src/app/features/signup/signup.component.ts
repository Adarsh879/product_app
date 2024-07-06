import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthOutcome, UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm!: FormGroup;
  authOutcome? : AuthOutcome;
  constructor(private userService: UserService,private router: Router) {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const user = this.signUpForm.value;
    this.userService.signup(user).then((authOutcome: AuthOutcome) => {
      this.authOutcome = authOutcome;
      if(authOutcome == AuthOutcome.Success){
        this.router.navigate(['/home']);
      }
    }).catch((authOutcome: AuthOutcome) => {
      this.authOutcome = authOutcome;
    });
  }
}
