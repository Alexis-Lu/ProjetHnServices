import { HttpClient } from '@angular/common/http';
import { Component, createPlatform, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css'],
})
export class UserTypeListComponent implements OnInit {
  data: any = [];
  userTypeList$: any;
  userList$: any;
  findItem: boolean = false;
  error: boolean = false;
  sorted: boolean;
  constructor(private dataService: MyDataService, private router: Router) {}
  ngOnInit(): void {
    this.sorted = true;
    this.loadList();
  }

  loadList() {
    this.data = [];
    this.dataService.getAllUserTypes().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.data.push(res[i]);
      }
      this.userTypeList$ = res;
    });
    this.dataService.getAllUsers().subscribe((res) => {
      this.userList$ = res;
    });
  }

  onDeleteUserType(id: number) {
    this.checkIfUserHaveUserType(id);
    if (this.findItem === false) {
      this.dataService.deleteUserTypeById(id).pipe(take(1)).subscribe();
      window.location.reload();
    } else {
      this.error = true;
    }
  }

  checkIfUserHaveUserType(id: number) {
    this.userList$.every((element) => {
      if (element.userType.id === id) {
        this.findItem = true;
        return false;
      }
      return true;
    });
  }

  onSort() {
    if (this.sorted == true) {
      this.data.sort((a: any, b: any) => b.id - a.id);
    } else {
      this.data.sort((a: any, b: any) => a.id - b.id);
    }
    this.sorted = !this.sorted;
  }
}
