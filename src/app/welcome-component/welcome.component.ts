import { Component } from '@angular/core';

@Component({
    selector: 'welcome-tag',
     templateUrl:'./welcome-component.html'
})

export class WelcomeComponent{
   welcomeText: string ="Hi Welcome to the online Market";
}