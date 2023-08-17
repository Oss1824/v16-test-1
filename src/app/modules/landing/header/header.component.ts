import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  focus: any;
  focus1: any;
  image: string;

  cards: card[];

  constructor() {}

  ngOnInit() {
    this.cards = [
      {
        title: 'ONE STOP SOLUTION',
        description:
          'We offer turnkey solutions for multi-disciplinary construction activities.',
        routerLink: ['about-us'],
      },
      {
        title: 'PROJECTS ACROSS INDIA',
        description:
          'Ongoing projects in Rajasthan, Uttar Pradesh, Maharashta, Jharkhand.',
        routerLink: ['projects', 'current-projects'],
      },
      {
        title: 'STRONG TRACK RECORD',
        description: 'Executed infrastructure and building construction.',
        routerLink: ['projects', 'completed-projects'],
      },
    ];
  }
}
class card {
  title: string;
  description: string;
  routerLink: string[];
}
