import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  @Input() aaccNo:string;

  constructor() { }

  ngOnInit() {
  }

}
