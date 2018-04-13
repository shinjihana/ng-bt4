import { Component, OnInit } from '@angular/core';

import { FlashService } from './flash-service.service';
import { User, UserLogin } from './user';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  user : User;

  userForm : FormGroup;

  submitted = false;

  constructor(
    private flashService: FlashService,
    private fb : FormBuilder,
  ) { 
    this.createForm();
  }

  createForm() : void {
    this.userForm = this.fb.group({
      email :  ['', Validators.required ],
      password :  ['', Validators.required ],
    });
  }
  ngOnInit(){
    this.getUser();
    console.log(this.user);
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  getUser() : void{
    this.flashService.getUser().subscribe(
      user => this.user = user
    );
  }
}
