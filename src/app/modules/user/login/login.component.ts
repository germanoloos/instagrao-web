import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  loginForm!: FormGroup;
  inputType = "password";
  loading = true;
  loadingButton = false;
  constructor(private formBuilder: FormBuilder) { }


  ngAfterViewChecked(): void {
    setTimeout(() =>
      this.loading = false, 3000
    )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginForm.disable();
    this.loadingButton = true;
    // TODO Chamada a api de autenticação
  }

}
