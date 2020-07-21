import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { StarComponent } from 'src/shared/star-component/star.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from "@angular/router";
import { WelcomeComponent } from './welcome-component/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductGuardGuard } from './product-detail/product-guard.guard';
import { ProductModule } from './productl-list/product.module';


@NgModule({
    imports:[BrowserModule, FormsModule,HttpClientModule,
    RouterModule.forRoot([
        {path:'welcome',component: WelcomeComponent},
        {path:'UserProfile',component: UserProfileComponent},
        
        
        {path:'',redirectTo:'welcome',pathMatch:'full'}, // Default page while loading
        {path:'**',redirectTo:'',pathMatch:'full'},
    ]),
    ProductModule],
    declarations:[AppComponent,WelcomeComponent, UserProfileComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}