import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit  {

  photos: Photo[] = []; 
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];  
    this.userName = this.activatedRoute.snapshot.data['photos'];
    // this.debounce.next('f');
   }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length){
          this.hasMore = false;
        }

      });
  }

}
