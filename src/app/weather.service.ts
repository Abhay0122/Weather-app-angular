import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  weather(city: any): Observable<any> {
    console.log(city);
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=863242cfb2b1d357e6093d9a4df19a4b`
    );
  }
}
