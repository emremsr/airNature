import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../service/create-service.service';
CreateServiceService
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CreateServiceService) { }

  treeMenu:any;
  ngOnInit(): void {
    this.treeMenu = this.service.treeDescription;
  }

}
