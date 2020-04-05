import { GallaryService } from './../gallary.service';
import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  ranarr
  imgGallary ;
  
  constructor(private gallary : GallaryService,private wowService: NgwWowService) {
    this.gallary.getImg().subscribe(data=>{
      this.imgGallary = data 
       console.log(typeof(this.imgGallary))
       this.imgGallary = data;

       this.ranarr = this.imgGallary.sort(() => Math.random() - .5);

      // console.log("hello",data)
    })
    this.wowService.init();
   }

  ngOnInit() {
  }

}
