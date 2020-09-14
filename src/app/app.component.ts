import { Component, OnInit } from '@angular/core';

import { testdata } from './testdata';
import { Subscription } from 'rxjs';
import { StateManagerService } from './state-manager.service';

import { TestDataInterface } from './test-data-interface';

declare var require: any;

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

  public dataObj: object = {
    prevBtnDisabled: false,
    nextBtnDisabled: false
  }

  public testData: Array<object>;

  constructor(private stateManagerService: StateManagerService) {}

  public ngOnInit() {
    this.testData = testdata;
    this.clickDataSubscription = this.stateManagerService.$clickData.subscribe(
      value => {
        this.receiveClickData(value);
      }
    )
    this.sendData();
  }

  public sendData() {
    this.testData[this.count]['testDataLength'] = this.testData.length;
    this.testData[this.count]['count'] = this.count;

    this.testData[this.count]['nextBtnDisabled'] = this.dataObj['nextBtnDisabled'];
    this.testData[this.count]['prevBtnDisabled'] = this.dataObj['prevBtnDisabled'];

    this.stateManagerService.dataTransfer(this.testData[this.count]);
  }

  public receiveClickData(val) {
    if (val.direction === 'next') {
      this.count++;
    } else if (val.direction === 'prev') {
      this.count--;
    } else if (val.direction === 'random') {
      this.count = this.getRandomQuestion();
      if (this.count === this.prevCount) {
        this.count = this.getRandomQuestion();
      }
    }
    this.prevCount = this.count;
    this.controlDisableCheck();
  }

  public controlDisableCheck () {
    if (this.count >= this.testData.length-1) {
      this.dataObj['nextBtnDisabled'] = true;
    } else if (this.count < 1) {
      this.dataObj['prevBtnDisabled'] = true;
    } else {
      this.dataObj['nextBtnDisabled'] = false;
      this.dataObj['prevBtnDisabled'] = false;
    }
    this.sendData();
  }

  public getRandomQuestion() {
    const min = 0;
    const max = this.testData.length - 1;
    return Math.ceil(Math.random() * (max - min) + min);
  }

}
