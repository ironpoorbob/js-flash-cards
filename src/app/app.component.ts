import { Component, OnInit } from '@angular/core';

import { testdata } from './testdata';
import { Subscription } from 'rxjs';
import { StateManagerService } from './state-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'flash-cards-js';

  public dataObj:object = {
    count: 0
  };
  public count: number = 1;
  public prevCount: number = 1;

  public clickDataSubscription: Subscription;
  public clickData: any;

  // @Input() question: string;
  // @Input() answer: string;
  public bar: any;
  public blah: string = 'what?';
  public baz: any = '';
  public bim: any = '';

  public question: any = '';
  public answer: any = '';
  public subNotes: string = '';

  public testDataLength: number = testdata.length;

  constructor(private stateManagerService: StateManagerService) {}

  // public questions: object = {
  //   question: 'why did the chicken cross the road?',
  //   answer: 'to get from the left to the right sir'
  // }

  public ngOnInit() {
    this.dataObj['testDataLength'] = this.testDataLength;
    console.log('test data: ', testdata, ' : : ', this.testDataLength);
    // console.log('Q/A: ', this.questions);
    // this.getQuestion;
    // this.getAnswer;
    // this.getSubnotes;
    // this.baz = testdata.questions.answer;
    // this.bim = testdata.questions.question;
    

    this.clickDataSubscription = this.stateManagerService.$clickData.subscribe(
      value => {
        this.receiveClickData(value);
      }
    )

    this.getData;
  }

  get getData() {
    // console.log('TEST DATA: ', testdata[this.count]);
    return testdata[this.count];
  }

  // get getQuestion() {
    // this.bar = this.questions['question'];
    // return this.questions['question'];
    // let foo = 'q' + this.count;
    // console.log('app q : ', this.count);
    // this.question = testdata[this.count].question;
    // return this.question;
  //   return testdata[this.count].question;
  // }

  // get getAnswer() {
    // let foo = 'q' + this.count;
    // this.answer = testdata[this.count].answer;
    // console.log('app the answer : ', this.count);
    // return this.answer;
    // return this.questions['answer'];
    // return testdata[this.count].answer;
  // }

  // get getSubnotes() {
    // this.subNotes = testdata[this.count].subNotes;
    // console.log('subNotes::::::::::::::::::::::: ', this.subNotes);
    // return this.subNotes;
    // return testdata[this.count].subNotes;
  // }

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

    console.log('numbers: the count: ', this.count, ' : prev : ', this.prevCount);
    this.prevCount = this.count;
 
    this.dataObj['count'] = this.count;
    this.stateManagerService.dataTransfer(this.dataObj);

    this.getData;

    // this.getQuestion;
    // this.getAnswer;
    // this.getSubnotes;
  }

  // get getQuestionType() {

  // }

  // get click info and figure out what to do

  public getRandomQuestion() {
    console.log('random click!');
    const min = 0;
    const max = this.testDataLength - 1;
    return Math.ceil(Math.random() * (max - min) + min);
  }

}
