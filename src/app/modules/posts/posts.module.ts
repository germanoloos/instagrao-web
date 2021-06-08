import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '@app/app-material';
import { AuthenticationService } from '../user/services/authentication.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    AngularMaterialModule
  ],
  providers: [AuthenticationService]
})
export class PostsModule { }
