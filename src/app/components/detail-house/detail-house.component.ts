import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonService} from "../../json.service";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss']
})
export class DetailHouseComponent implements OnInit {

  houseName: any;
  nameFilter: any;
  showCharacters = [];

  form: any;

  constructor(private route: ActivatedRoute,
              public location: Location,
              public json: JsonService,
              private formBuilder: FormBuilder) {
    this.form = FormGroup;
    this.buildForm();
    this.route.params.subscribe(params => {
      this.houseName = params['name'];
      this.detailHouse();
    });
    this.form.get('name').valueChanges.pipe(
      debounceTime(3000)
    )
      .subscribe((value: any) => {
        this.save(value);
      });
  }

  ngOnInit(): void {
    this.save('');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['']
    });
  }

  detailHouse() {
    this.json.getJson('http://hp-api.herokuapp.com/api/characters/house/' + this.houseName).subscribe((res: any) => {
      this.showCharacters = res;
      console.log(this.showCharacters);
    });
  }

  save(name: any) {
    this.nameFilter = name;
    console.log(this.nameFilter);
    const filteredPeople = this.showCharacters.filter((currentElement => {
      return currentElement['name'] == this.nameFilter;
    }));
    console.log(filteredPeople);
  }

}
