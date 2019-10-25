import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../shared/models/customer';
import {WhoamiService} from '../../core/whoami.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  customer: Customer;
  constructor(private route: ActivatedRoute, private whoamiService: WhoamiService) {
    this.customer = whoamiService.whoami;
  }

  ngOnInit() {
    console.log(this.customer);
  }

}
