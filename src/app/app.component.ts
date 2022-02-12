import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _NgxSpinnerService: NgxSpinnerService,
    private _FacebookService: FacebookService
  ) {}
  title = 'ng-db-porfolio';

  ngOnInit(): void {
    this._NgxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerService.hide();
    }, 5000);
    this.initFacebookService();
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: 'v2.0' };
    this._FacebookService.init(initParams);
  }
}
