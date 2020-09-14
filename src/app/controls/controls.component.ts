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
    count: 1
  };

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
  }

  public handlePrevButtonClick() {
    this.clickData['direction'] = 'prev';
    this.stateManagerService.getClickData(this.clickData);
  }

  public handleRandomButtonClick() {
    this.clickData['direction'] = 'random';
    this.stateManagerService.getClickData(this.clickData);
  }

  public handleCheckAnswer() {

  }

  public showAnswer() {

  }

}
