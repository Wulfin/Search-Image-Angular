import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searched: any = "";

  onSubmit(f: NgForm) {
    
  }
}
