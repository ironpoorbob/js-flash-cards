import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  public isValid: boolean;

  public dataSubscription: Subscription;
  public data: any;

  // public prevDisabled: boolean;
  // public nextDisabled: boolean;

  // public count: number;
  // public testDataLength: number;

  constructor(private stateManagerService: StateManagerService) {
    this.dataSubscription = this.stateManagerService.$data.subscribe(
      value => {
        this.data = value;
        // this.count = value.count;
        // this.testDataLength = value.testDataLength;
        // this.getSubscribeData(value);
        // this.isInvalid(value);
      }
    )
  }

  ngOnInit(): void {
    // this.isValid = true;
    console.log('initial data: ', this.data);
  }

  public getSubscribeData(data) {
    console.log('questions data: ', data);
    
  }

  public prevDisabled() {
    console.log('button data: ', this.data);
    if(this.data){
      if (this.data.count === 0) {
        console.log('hit the end');
        return true;
      }
    }
  }

  public nextDisabled() {
    console.log('button data: ', this.data);
    if(this.data){
      if (this.data.count >= this.data.testDataLength-1) {
        console.log('hit the end');
        return true;
      }
    }
  }

  public isInvalid(data) {
    // this.nextDisabled = true;
    console.log('button data: ', data);
    if (data.count >= data.testDataLength) {
      console.log('hit the end');
      // return true;
      this.nextDisabled();
      // this.nextDisabled = true;
    } else {
      // this.nextDisabled = false;
    }
    // return true;
  }

  public handleNextButtonClick() {
    // console.log('click next');
    // this.stateManagerService.dataTransfer('foo');
    this.stateManagerService.getClickData('next');
  }

  public handlePrevButtonClick() {
    // console.log('click prev');
    this.stateManagerService.getClickData('prev');
  }

  public handleRandomButtonClick() {
    // console.log('click random');
    this.stateManagerService.getClickData('random');
  }

  public handleCheckAnswer() {

  }

  public showAnswer() {

  }

}
