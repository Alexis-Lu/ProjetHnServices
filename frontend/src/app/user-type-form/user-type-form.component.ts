import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.css'],
})
export class UserTypeFormComponent implements OnInit {
  reactiveForm: FormGroup;
  id: number;
  constructor(
    private dataService: MyDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.reactiveForm = new FormGroup({
      name: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id') == null
      ? null
      : this.dataService
          .getUserTypeById(+this.route.snapshot.paramMap.get('id'))
          .subscribe((event: any) => {
            console.log(event);
            this.id = +this.route.snapshot.paramMap.get('id');
            this.reactiveForm = new FormGroup({
              name: new FormControl(event['name']),
            });
          });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
    console.log(this.id);
    var obj = new Object({
      id: this.id,
      name: this.reactiveForm.value['name'],
    });
    console.log(obj);
    this.id == null ? this.createUserType() : this.updateUserType(obj);
    this.router.navigate(['/userTypeList']);
  }

  createUserType() {
    return this.dataService
      .createUserType(this.reactiveForm.value)
      .subscribe({ next: (response) => console.log(response) });
  }

  updateUserType(object: any) {
    return this.dataService
      .updateUserTypeById(this.id, object)
      .subscribe({ next: (response) => console.log(response) });
  }
}
