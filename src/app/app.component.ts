import { Component, OnInit } from '@angular/core';

import { testdata } from './testdata';
import { Subscription } from 'rxjs';
import { StateManagerService } from './state-manager.service';

import { TestDataInterface } from './test-data-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'flash-cards-js';

  public clickDataSubscription: Subscription;
  public clickData: any;

  public count: number = 1;
  public prevCount: number = 1;

  public testData: Array<object> = [];

  constructor(private stateManagerService: StateManagerService) {}

  public ngOnInit() {
    // this.dataObj['testDataLength'] = this.testDataLength;
    this.testData = testdata;
    // console.log('test data: ', testdata, ' : : ', testdata.length);
    // console.log('test DATA: ', this.testData, ' : : ', this.testData);
    this.clickDataSubscription = this.stateManagerService.$clickData.subscribe(
      value => {
        this.receiveClickData(value);
      }
    )

    this.getData;
  }

  get getData() {
    // console.log("TESTING 1 2 3: ", this.testData[this.count]);
    return this.testData[this.count];
  }

  public receiveClickData(val) {
    // console.log('Getting info from service::::::: ', data);
    if (val === 'next') {
      this.count++;
    } else if (val === 'prev') {
      this.count--;
    } else if (val === 'random') {
      this.count = this.getRandomQuestion();
      if (this.count === this.prevCount) {
        this.count = this.getRandomQuestion();
      }
    }

    // console.log('numbers: the count: ', this.count, ' : prev : ', this.prevCount);
    this.prevCount = this.count;
    this.getData;
  }

  public getRandomQuestion() {
    console.log('random click!');
    const min = 0;
    const max = this.testData.length - 1;
    // const max = 3;
    return Math.ceil(Math.random() * (max - min) + min);
  }

}
