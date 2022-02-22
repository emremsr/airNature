import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../service/create-service.service';
CreateServiceService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CreateServiceService) { }

  treeData:any;
  ngOnInit(): void {

    this.treeData = this.service.treeDescription;
  }

}
