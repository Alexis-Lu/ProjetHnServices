import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  userData$: any;
  constructor(
    private dataService: MyDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadUserDatas();
  }

  loadUserDatas() {
    this.dataService
      .getUserById(+this.route.snapshot.paramMap.get('id'))
      .subscribe((res: any) => {
        console.log(res);
        this.userData$ = res;
      });
  }
}
