import { Component } from '@angular/core';
import {Photo} from "../models/photo";
import {PhotoService} from "../photo.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  photos!: Array<Photo>
  mot!: string
  keyword = '';


  ngOnInit(){
  }

  constructor(private photoService: PhotoService) {
  }

  affiche($event : Photo){
    console.log($event.pageURL);
  }

  getPhotos(mot: string){
    this.photoService.getPhotos(mot).subscribe(
      (response: any) => {
        this.photos = response.hits;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onSubmit(f: NgForm) {
    this.mot = f.value["mot"]
    this.getPhotos(this.keyword)
  }
}
