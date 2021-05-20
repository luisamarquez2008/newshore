import {Component, OnInit} from '@angular/core';
import {JsonService} from "../../json.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  characters = [];
  showCharacters = [];

  houseName: any;
  to : any;

  constructor(public json: JsonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getSchool();
  }


  getSchool() {
    this.json.getJson('http://hp-api.herokuapp.com/api/characters/staff').subscribe((res: any) => {
      this.characters = res;
      this.to = this.characters.length;
      console.log(this.to);
    });
  }

  show(item: any) {
    this.houseName = item.house;
    this.router.navigate(['/detail/' + this.houseName]);
  }


}
