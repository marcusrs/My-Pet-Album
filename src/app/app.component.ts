import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Define a users property to hold  user data
  users: Array<any>;

  // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  // Access the Data Service's getUsers() method
      this._dataService.getUsers()
          .subscribe(res => this.users = res);
    }
}
