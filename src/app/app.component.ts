import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home/home.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    private _page = 2;
    constructor(private router: Router, private homeService: HomeService) {
    }
    onScroll () {
         this.homeService.getFlickrPics(this._page++);
    }
}
