import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BoardsListComponent} from './boards-list.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {TrelloService} from './trello.service';
import {TrelloAuthGuard} from './trello-auth.guard';
import {TrelloAuthComponent} from './trello-auth.component';
import {BoardDetailComponent} from './board-detail.component';

@NgModule({
    declarations: [AppComponent, BoardsListComponent, BoardDetailComponent, TrelloAuthComponent],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
    providers: [TrelloService, TrelloAuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
