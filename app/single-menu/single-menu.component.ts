import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateServiceService } from '../service/create-service.service';
CreateServiceService
ActivatedRoute
@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.css']
})
export class SingleMenuComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:CreateServiceService) { }

  getTreeId:any;
  treeData:any;
  ngOnInit(): void {
    this.getTreeId = this.param.snapshot.paramMap.get('id');

    if(this.getTreeId){
      this.treeData = this.service.treeDescription.filter((value)=>{
        return value.id==this.getTreeId;
      })
    }
  }

}
