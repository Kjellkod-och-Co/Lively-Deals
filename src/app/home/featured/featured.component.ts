import { Component, OnInit } from '@angular/core';
import { CheadSharkApiService } from 'src/app/chead-shark-api.service';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit   {
  coverImage = '';
  gameTitle = '';
  lastchange = '';
  
  constructor(private sharkApi: CheadSharkApiService) {}
  ngOnInit() {
    this.sharkApi.getOnSaleFeatured().subscribe((data: any) => {
      console.log(data[0]);
      this.coverImage = data[0].thumb;
      this.gameTitle = data[0].title;
      this.lastchange = dayjs.unix(data[0].lastChange).format();
    })
    
  }
}
