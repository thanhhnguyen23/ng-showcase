import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/animations';


@Component({
  selector: 'app-toh',
  templateUrl: './toh.component.html',
  styleUrls: ['./toh.component.css'],
  animations: [ slideInAnimation ]

})
export class TohComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
