import { Component, OnInit } from '@angular/core';

import { PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: Array<PoNavbarItem> = [
    {label: "home", link: "/home"},
    {label: "detalhes", link: "/detalhes"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
