import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  constructor(private auth: WeatherService) {}
  place = '';
  toggle = true;
  WeatherForm = new FormGroup({
    place: new FormControl(''),
  });
  weather = {
    temp: '',
  };
  data = [];
  onSubmit() {
    // this.auth.weather(this.WeatherForm.value.place);
    // this.auth.weather.subscribe((data) => console.log(data));
    console.log(this.WeatherForm.value.place);
    this.auth
      .weather(this.WeatherForm.value.place)
      // .subscribe((data) => console.log(data));
      .subscribe((data) => (this.weather = data.main));
    console.log(typeof this.weather.temp);
    this.toggle = false;
  }
}
