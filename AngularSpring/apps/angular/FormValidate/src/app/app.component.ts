import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidate';
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';
  // tslint:disable-next-line:no-inferrable-types
  email: string = '';
}
