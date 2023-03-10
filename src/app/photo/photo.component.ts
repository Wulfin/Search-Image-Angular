import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Photo} from "../models/photo";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() photo!: Photo ;
  @Output() productSelected = new EventEmitter<Photo>();
}
