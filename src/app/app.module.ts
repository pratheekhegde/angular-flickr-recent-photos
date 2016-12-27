import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        InfiniteScrollModule
    ],
    providers: [HomeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
