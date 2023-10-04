import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input()
  gameName: string = ""
  @Input()
  gamePrice: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
