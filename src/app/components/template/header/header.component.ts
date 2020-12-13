import { Router } from '@angular/router';
import { HeaderService } from './../../../../../../recrutamento/src/app/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
  }

  get title() : string{
    return this.headerService.headerData.title
  }

  get icon() : string{
    return this.headerService.headerData.icon
  }

  get router() : string{
    return this.headerService.headerData.router
  }

}
