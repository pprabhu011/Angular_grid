import { Component } from '@angular/core';
@Component({selector:'app-root',
// template:`<div>
//  <h1>{{myName}} </h1> 
// <div> My First Component</div></div>`
templateUrl:'./app.component.html'
})

export class AppComponent{
     myName: string = 'Prabhu_Website';
}