import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private name;
  user = {};
  isActive = false;
  value = false;

  constructor() { }

  change(): void {
    this.isActive = !this.isActive;
  }

  change2(): void {
    this.value = !this.value;
    console.log(this.value);
  }

  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
    this.name = "Binding"
  }

}
