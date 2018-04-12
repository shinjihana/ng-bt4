import { Component, OnInit } from '@angular/core';

import { FlashService } from './flash-service.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  user : User;

  constructor(private flashService: FlashService) { }
  ngOnInit(){
    this.getUser();
    console.log(this.user);
  }

  getUser() : void{
    this.flashService.getUser().subscribe(
      user => this.user = user
    );
  }
}
