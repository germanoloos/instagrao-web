import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/app-material';
import { SharedModule } from '@app/core/shared.module';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})

export class UserModule { }
