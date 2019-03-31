import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wizzard';
  snapshotParam = "initial value";
  subscribedParam = "initial value";

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.snapshotParam = this.route.snapshot.paramMap.get("ref");
    console.log(this.route.snapshot.paramMap);
    console.log(this.route.snapshot.queryParamMap.get("ref"));

    this.route.paramMap.subscribe(params => {
      console.log("params", params);
      this.subscribedParam = params.get("ref");
    });
    console.log(this.snapshotParam);
    console.log(this.subscribedParam);
  }
  
   
}

