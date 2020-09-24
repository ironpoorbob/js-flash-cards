import { Component, Input, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() controlData: any;
  public isValid: boolean;

  public dataSubscription: Subscription;
  public data: any; // data received

  // data sending to app
  public clickData: object = {
    direction: '',
    count: 1,
    isAnswerShown: false
  };

  public isAnswerShown: boolean = false;

  constructor(private stateManagerService: StateManagerService) {
    this.dataSubscription = this.stateManagerService.$data.subscribe(
      value => {
        this.data = value;
        // console.log('value : ', this.data);
      }
    )
  }

  ngOnInit(): void {}
  
  public handleNextButtonClick() {
    this.clickData['direction'] = 'next';
    this.stateManagerService.getClickData(this.clickData);
    // this.handleReset();
  }

  public handlePrevButtonClick() {
    this.clickData['direction'] = 'prev';
    this.stateManagerService.getClickData(this.clickData);
    // this.handleReset();
  }

  public handleRandomButtonClick() {
    this.clickData['direction'] = 'random';
    this.stateManagerService.getClickData(this.clickData);
    // this.handleReset();
  }

  public handleShowAnswer() {
    console.log('click show')
    // this.clickData['direction'] = '';
    // this.clickData['isAnswerShown'] = true;
    this.isAnswerShown = true;
    this.stateManagerService.getAnswerData(this.isAnswerShown);
  }

  public handleReset() {
    console.log('HANDLE RESET');
    // this.clickData['isAnswerShown'] = false;
    // this.stateManagerService.getClickData(this.clickData);
  }

  public handleCheckAnswer() {

  }

  public showAnswer() {

  }

}
