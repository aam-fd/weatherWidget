import { Component } from '@angular/core';
import { products$ } from './mocks/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public products$: Observable<IProduct[]> = products$;

  public types = ['Hotel', 'Fishing', 'Tours', 'Weather'];

  // public src1=products$[0].img1;
}
