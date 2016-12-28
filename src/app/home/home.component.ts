import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    styleUrls: ['home.component.scss'],
    templateUrl: 'home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    public recentFlickrPics: any = [];
    public isLoading$: Subject<Boolean>;
    public isLoadingMore$: Subject<Boolean>;
    constructor(private homeService: HomeService) { }
    ngOnInit(): void {
        // Get the first page
        this.homeService.getFlickrPics(1);
        // this.recentFlickrPics$ = this.homeService.flickrPics$;
        this.isLoading$ = this.homeService.isLoading$;
        this.isLoadingMore$ = this.homeService.isLoadingMore$;
        this.homeService.flickrPics$.subscribe(pics => {
            if (pics !== null) {
                this.recentFlickrPics = this.recentFlickrPics.concat(pics);
            }
        });
    }
    trackFbObjects = (index, item) => {
        return item.id;
    }
}
