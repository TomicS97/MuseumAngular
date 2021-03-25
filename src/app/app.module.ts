import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { CollectionsComponent } from './collections/collections.component';
import { TreeService } from './shared/tree.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
