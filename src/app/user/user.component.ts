import { Component, OnInit } from '@angular/core';
import {Address} from '../address';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  address:Address;

// instantiate the values of a class
  constructor() { 
    this.address = {
      city:'San Diego',
      state:'California'
    }
  }

// once and its called after the constructor
// load the data from service
// obtain a DB Connection
  ngOnInit() {
    this.address.city='San Jose';
    this.address.state='California';
  }

}


