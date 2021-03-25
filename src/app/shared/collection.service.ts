import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Collection } from './collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  public collection !: Collection;
  readonly rootURL = "https://localhost:44359/api/museum"
  constructor(private http: HttpClient) { }

  getCollection(id: number) {
    this.http
      .post(this.rootURL + '/getCollection', id)
      .subscribe(data => {
        this.collection = data as Collection;
      });
  }

  getCollectionEdit(id: number) {
    this.http
      .post(this.rootURL + '/editArt', id)
      .subscribe(data => {
        this.collection = data as Collection;
      });
  }

  saveCollcection(collection: Collection) {
    this.http
      .post(this.rootURL + '/saveEditArt', collection)
      .subscribe(data => {
        this.collection = data as Collection;
        alert("Document changed.");
        window.location.href = '/getTree';
      });
  }
}
