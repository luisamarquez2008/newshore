import { Component } from '@angular/core';
import {JsonService} from "./json.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mse';

  characters = [];

  constructor(public json: JsonService) {
  }

  ngOnInit(): void {
    this.getSchool();
  }


  getSchool() {
    this.json.getJson('http://hp-api.herokuapp.com/api/characters').subscribe((res: any) => {
      console.log(res);
      this.characters = res;
    });
  }
}
