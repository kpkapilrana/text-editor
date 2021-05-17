import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, CKEditorModule],
})
export class HomeModule {}
