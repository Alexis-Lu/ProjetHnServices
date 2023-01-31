import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { delay, take, Subscription, timeInterval, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any = [];
  myData: any;
  userList$: any;
  sortedIndex: boolean;
  sortedFirstname: boolean;
  sortedName: boolean;
  sortedEmail: boolean;
  sortedUserType: boolean;
  private subscription: Subscription;
  constructor(private myDataService: MyDataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadList();
    this.sortedIndex = true;
  }

  loadList() {
    this.subscription = this.myDataService
      .getAllUsers()
      .subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          this.data.push(res[i]);
        }
        this.userList$ = res;
      });
  }

  onDeleteUser(id: number) {
    console.log(this.subscription);
    this.myDataService.deleteUserById(id).subscribe(() => {
      console.log(this.subscription);
      if (!this.subscription) {
        this.subscription.unsubscribe();
        this.loadList();
      }
    });
    window.location.reload();
  }

  sortOn(name: string) {
    switch (name) {
      case 'index':
        if (this.sortedIndex !== true) {
          this.data.sort((a: any, b: any) => a.id - b.id);
        } else {
          this.data.sort((a: any, b: any) => b.id - a.id);
        }
        this.sortedIndex = !this.sortedIndex;
        break;
      case 'firstname':
        if (this.sortedFirstname == true) {
          this.data.sort((a: any, b: any) =>
            a.firstname.toLowerCase() > b.firstname.toLowerCase()
              ? 1
              : b.firstname.toLowerCase() > a.firstname.toLowerCase()
              ? -1
              : 0
          );
        } else {
          this.data.sort((a: any, b: any) =>
            a.firstname.toLowerCase() < b.firstname.toLowerCase()
              ? 1
              : b.firstname.toLowerCase() < a.firstname.toLowerCase()
              ? -1
              : 0
          );
        }
        this.sortedFirstname = !this.sortedFirstname;
        break;
      case 'name':
        if (this.sortedName == true) {
          this.data.sort((a: any, b: any) =>
            a.name.toLowerCase() > b.name.toLowerCase()
              ? 1
              : b.name.toLowerCase() > a.name.toLowerCase()
              ? -1
              : 0
          );
        } else {
          this.data.sort((a: any, b: any) =>
            a.name.toLowerCase() < b.name.toLowerCase()
              ? 1
              : b.name.toLowerCase() < a.name.toLowerCase()
              ? -1
              : 0
          );
        }
        this.sortedName = !this.sortedName;
        break;
      case 'email':
        if (this.sortedEmail !== true) {
          this.data.sort((a: any, b: any) =>
            a.email.toLowerCase() > b.email.toLowerCase()
              ? 1
              : b.email.toLowerCase() > a.email.toLowerCase()
              ? -1
              : 0
          );
        } else {
          this.data.sort((a: any, b: any) =>
            a.email.toLowerCase() < b.email.toLowerCase()
              ? 1
              : b.email.toLowerCase() < a.email.toLowerCase()
              ? -1
              : 0
          );
        }
        this.sortedEmail = !this.sortedEmail;
        break;
      case 'userType':
        if (this.sortedUserType !== true) {
          this.data.sort((a: any, b: any) =>
            a.userType.name.toLowerCase() > b.userType.name.toLowerCase()
              ? 1
              : b.userType.name.toLowerCase() > a.userType.name.toLowerCase()
              ? -1
              : 0
          );
        } else {
          this.data.sort((a: any, b: any) =>
            a.userType.name.toLowerCase() < b.userType.name.toLowerCase()
              ? 1
              : b.userType.name.toLowerCase() < a.userType.name.toLowerCase()
              ? -1
              : 0
          );
        }
        this.sortedUserType = !this.sortedUserType;
        break;
    }
  }
}
