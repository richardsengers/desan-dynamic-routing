import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Survey} from '../../shared/models/survey';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.scss']
})
export class EnqueteComponent implements OnInit {
  survey: Survey;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.survey = this.route.snapshot.data.survey;
    console.log(this.survey);
  }

}
