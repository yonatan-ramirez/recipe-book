import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // tslint:disable-next-line:no-inferrable-types
  loadedFeature: string = 'recipe';

  navigate(feature: string) {
console.log('set new feature:', feature);
this.loadedFeature = 'featrue';
  }
}
