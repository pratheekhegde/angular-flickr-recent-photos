import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class HomeService {
    // Flickr Key
    key = 'e7dfbb90fb6d08a40ac67a01da47d9ab';
    resultsPerPage = 24;

    public flickrPics$: Subject<any> = new BehaviorSubject<any>(null);
    public isLoading$: Subject<Boolean> = new BehaviorSubject<Boolean>(false);
    public isLoadingMore$: Subject<Boolean> = new BehaviorSubject<Boolean>(false);
    private _allPics: any[] = [];

    constructor(private _http: Http) { };

    getFlickrPics(page): any {
        // Dont show loading more for first page
        if (page > 1) {
            this.isLoadingMore$.next(true);
            this.resultsPerPage = 12;
        } else {
            this.isLoading$.next(true);
        }
        // https://www.flickr.com/services/api/explore/flickr.photos.getRecent
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.key}&extras=owner_name,date_upload,url_q,url_o&per_page=${this.resultsPerPage}&page=${page}&format=json&nojsoncallback=1`;
        this._http
            .get(url)
            .subscribe((res) => {
                // this._allPics = this._allPics.concat(res.json().photos.photo);
                this.flickrPics$.next(res.json().photos.photo);
                // Dont show loading more for first page
                if (page > 1) {
                    this.isLoadingMore$.next(false);
                } else {
                    this.isLoading$.next(false);
                }
            });
        return;
    }
}