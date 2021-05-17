import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ElectronService } from "../core/services";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public Editor = ClassicEditor;
  data: any;
  public model = {
    editorData: "<p>Hello, world!</p>",
  };
  constructor(
    private router: Router,
    private electronService: ElectronService
  ) {}

  ngOnInit(): void {
    this.data = this.electronService.fs.readFileSync(
      "src/assets/default.html",
      "utf8"
    );
    console.log("--", this.data);
  }
}
