import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/collection.service';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  
  constructor(public service: CollectionService, public appComponent: AppComponent) { 
  }  
  ngOnInit(): void {   
  }

  loadCollectionEdit(id: number){
    this.service.getCollectionEdit(id);
    this.appComponent.editMode = true;
  }
}
