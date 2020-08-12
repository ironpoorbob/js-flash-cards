import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Input() data: any;
  
  constructor() {}

  ngOnInit(): void {
    // console.log('component questions: ', this.question);
  }

  // get getQuestion() {
  //   // console.log('in comp : question ::', this.question);
  //   return this.question;
  // }

}
