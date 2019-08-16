import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const CONFIG_URL = '/assets/data/appConfig.json';

@Injectable()
export class ApplicationService {
  private appConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get(CONFIG_URL)
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
