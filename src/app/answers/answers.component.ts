import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  @Input() data: string;

  constructor() { }

  ngOnInit(): void {
    console.log('data answer: ', this.data);
    // console.log('component answer: ', this.answer);
    // console.log('component subnotes: ', this.subNotes);
  }

  public checkboxClick(val) {
    // console.log('checkbox click: ', val);
  }

  // get getAnswer() {
  //   console.log('ARE we getting here: get answerss: ', this.answer);
  //   return this.answer;
  // }

  // get getSubnotes() {
  //   return this.subNotes;
  // }

}
