import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  // @Input() data: any;
  public data: any = {
    isAnswerShown: false
  };

  public dataSubscription: Subscription;
  // public data: any; // data received

  public clickDataSubscription: Subscription;
  public clickData: any;

  public mainDataSubscription: Subscription;
  public mainData: any;

  public answerDataSubscription: Subscription;
  public answerData: any;

  public answerClass; string;

  public selectedAnswer: number;

  constructor(private stateManagerService: StateManagerService) {}

  ngOnInit(): void {
    // console.log('data answer: ', this.data);
    // console.log('component answer: ', this.answer);
    // console.log('component subnotes: ', this.subNotes);
    this.dataSubscription = this.stateManagerService.$data.subscribe(
      value => {
        this.data = value;
        // console.log('value : ', this.data);
      }
    )


    this.answerDataSubscription = this.stateManagerService.$answerData.subscribe(
      value => {
        console.log('answer data: ', value);
        this.answerData = value;
      }
    )

    this.mainDataSubscription = this.stateManagerService.$data.subscribe(
      value => {
        console.log('getting answers: ', value);
        this.data = value;
      }
    )

    this.clickDataSubscription = this.stateManagerService.$clickData.subscribe(
      value => {
        this.resetAnswerVals(value);
      }
    )
  }

  public checkboxClick(val) {
    console.log('checkbox click: ', val, ' : ', this.data.choice);
    if (val == this.data.choice) {
      console.log('right answer');
      this.selectedAnswer = val;
      this.answerClicked();
    }
  }

  public answerClicked() {
    this.answerClass = 'correct'
    // return true;
  }

  public resetAnswerVals(val) {
    this.selectedAnswer = null;
  }

  public answerUpdate() {
    // if 
    // return 'foo';
    return 'correct';
  }

  // get getAnswer() {
  //   console.log('ARE we getting here: get answerss: ', this.answer);
  //   return this.answer;
  // }

  // get getSubnotes() {
  //   return this.subNotes;
  // }

}
