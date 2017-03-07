import { Component, ReflectiveInjector } from '@angular/core';
import { MyService } from './services/my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myService: MyService;
  // myOtherService: MyService;

  constructor() {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);
    console.log('Same instance?', this.myService === injector.get(MyService));

    // let otherInjactor: any = ReflectiveInjector.resolveAndCreate([MyService]);
    // this.myOtherService = otherInjactor.get(MyService);    
    // console.log('Same instance?', this.myService === this.myOtherService);
  }

  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }
}
