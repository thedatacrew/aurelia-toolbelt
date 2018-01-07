import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';


@autoinject
export class Buttons {

  constructor(private http: HttpClient) {
    // todo
  }

  private buttonClicked(event: Event, target: HTMLButtonElement) {
    console.log('buttonClicked');
    console.log(target);
    return this.http.get('https://github.com');
  }

}