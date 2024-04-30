import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {passwordMatchValidator} from "../../shared/password-match.directive";
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/auth";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm = this.fb.group({
  fullName :['',Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)],
  email :['',Validators.required, Validators.email],
  password :['',Validators.required],
  confirmPassword :['',Validators.required]
},{
  validators: passwordMatchValidator
})
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
  }
  get fullName(){
    return this.registerForm.controls['fullName'];
  }
  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  submitDetails(){
    const postData = {...this.registerForm.value};
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      response=>{
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successful' });
        this.router.navigate(['/login']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Success', detail: 'something went wrong' });
      }
    );
  }
  ngOnInit(): void {
  }

}
