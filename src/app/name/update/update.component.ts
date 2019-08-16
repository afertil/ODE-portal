import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-update',
  styleUrls: ['./update.component.scss'],
  template: `
    Name
  `
})
export class UpdateNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Init Name app')
  }

}
