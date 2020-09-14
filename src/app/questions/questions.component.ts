import { Component, OnInit, Input } from '@angular/core';
import { Subscription, ReplaySubject } from 'rxjs';

import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  // @Input() data: any;

  public data: any = {};

  public mainDataSubscription: Subscription;
  public mainData: any;
  
  constructor(private stateManagerService: StateManagerService) {}

  ngOnInit(): void {
    console.log('QUESTIONS');
    this.mainDataSubscription = this.stateManagerService.$data.subscribe(
      value => {
        this.data = value;
      }
    )
  }

}
