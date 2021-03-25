import { Component } from '@angular/core';
import { CollectionService } from './shared/collection.service';
import { Collection } from '../app/shared/collection.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: CollectionService) {
  }

  title = 'Angular7';
  public editMode: boolean = false;
  public previewMode : boolean = false;

  saveEditCollection(collection: Collection) {
    this.service.saveCollcection(collection);
  }

  previewEditCollection(collection: Collection) {
    this.previewMode = true;
  }
}
