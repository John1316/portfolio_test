import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CasestudyService } from 'src/app/services/casestudy.service';
@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  loading= true;
  caseStudies: any[] = [];
  caseStudyImage='https://digitalbondmena.com/clients/';
  constructor(private _CasestudyService:CasestudyService) {

  }
  getCaseStudies(){
    this._CasestudyService.getCaseStudies().subscribe(
      (response) => {
        this.caseStudies = response.clients
        this.loading= false
      }
    )
  }
  caseStudiesSlider: OwlOptions ={
    loop: true,
    margin:40,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },

    },
    nav:true
  }
  ngOnInit(): void {
    this.getCaseStudies()
  }
}
