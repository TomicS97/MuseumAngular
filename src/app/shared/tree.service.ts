import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Tree } from './tree.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TreeService {

  public tree !: Tree;
  public id !: "";
  public myModel !: StringModel;

  readonly rootURL = "https://localhost:44359/api/museum"
  constructor( private http : HttpClient) {
    this.http.options
   }

  getTree(){
    this.http
    .get(this.rootURL+'/getTree')
    .subscribe(data => {
      this.tree = data as Tree;
    });
  }

  getTreeSearch(searchTerm: string){
    this.myModel = new StringModel();
    this.myModel.key = searchTerm;
    this.http
    .post(this.rootURL + '/getTreeSearch', this.myModel)
    .subscribe(data => {
      this.tree = data as Tree;
    });
  }
}
class StringModel{
  key!: string
}
