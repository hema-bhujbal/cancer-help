import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from "../../../core/services/patient.service";
import { TokenStorageService } from "../../../core/services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private patientService : PatientService, private tokenStorageService : TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }

    this.loginForm = this.formBuilder.group({
      email: ['sbhujbal08@gmail.com', [Validators.required, Validators.email]],
      password: ['abcd', [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      let data = {email : this.f.email.value, password : this.f.password.value};
      this.patientService.loginRequest(data);  
      this.patientService.currentUser.subscribe((result:any)=>{
        if(result){
          console.log(result)
          this.tokenStorageService.saveToken(result.token);
          this.tokenStorageService.saveUser(result.uid);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(["/wizard"]);
        }
      },err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
    }
  }

}