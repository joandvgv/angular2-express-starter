import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {DataService} from '../services/data.service';
import { Http } from '@angular/http';

import { IAppState } from '../store/index';
import { WEATHER_GET, SELECT_CITY } from '../store/weather/weather.actions';
import { IWeather } from '../store/weather/weather.reducer';

declare var $: any;
@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html',
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent {
  contactForm: FormGroup;
  first = new FormControl('', Validators.required);
  last = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  telf = new FormControl('', Validators.required);
  text = new FormControl('', Validators.required);

  constructor(public fb: FormBuilder, private http: Http,
              private dataService: DataService) {
    this.contactForm = fb.group({
      name: fb.group({
        first: this.first,
        last: this.last,
      }),
      email: this.email,
      telf: this.telf,
      text: this.text,
    });
  }


  sendMail(){
    this.dataService.sendMail(this.contactForm.value.email,this.contactForm.value.text,
                              this.contactForm.value.telf,this.contactForm.value.name.first)
                              .subscribe(
                                data=>{
                                },
                                error =>{
                                }); 
  }  

}
