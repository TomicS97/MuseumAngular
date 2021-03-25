import { Component, OnInit } from '@angular/core';
import { TreeService } from '../shared/tree.service';
import { Tree } from '../shared/tree.model';
import { CollectionsComponent } from '../collections/collections.component';
import { CollectionService } from '../shared/collection.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor(public service: TreeService, public serviceCollection: CollectionService) { 
  }
  ngOnInit(): void {
    this.service.getTree();
  }
  loadCollectionTree(id: number){
    this.serviceCollection.getCollection(id);
  }
  textINput !:string;
  searchTree(event: any){
    this.textINput = event.target.value;
    this.service.getTreeSearch(this.textINput);
  }

}
