import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userTypeList$: any;
  reactiveForm: FormGroup;
  id: number;
  constructor(
    private dataService: MyDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      userType: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id') == null
      ? null
      : this.dataService
          .getUserById(+this.route.snapshot.paramMap.get('id'))
          .subscribe((event: any) => {
            this.reactiveForm = new FormGroup({
              firstname: new FormControl(event['firstname']),
              name: new FormControl(event['name']),
              email: new FormControl(event['email']),
              userType: new FormControl(event['userType']['name']),
            });
            this.id = +this.route.snapshot.paramMap.get('id');
          });
    this.dataService.getAllUserTypes().subscribe((res) => {
      this.userTypeList$ = res;
    });
  }

  onSubmit() {
    this.getId();
    this.reactiveForm.controls['userType'].setValue(this.getId());
    this.id == null ? this.createUser() : this.updateUser();
    this.router.navigate(['/']);
  }

  createUser() {
    return this.dataService
      .createUser(this.reactiveForm.value)
      .subscribe({ next: (response) => console.log(response) });
  }

  updateUser() {
    this.dataService
      .updateUserById(this.id, this.reactiveForm.value)
      .subscribe({ next: (response) => console.log(response) });
  }

  getId() {
    var object;
    this.userTypeList$.forEach((element) => {
      element.name === this.reactiveForm.value['userType']
        ? (object = element)
        : null;
    });
    return object;
  }
}
