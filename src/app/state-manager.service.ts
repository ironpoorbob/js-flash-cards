import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private clickDataSource = new Subject<any>();
  private dataSource = new ReplaySubject<any>();

  public $clickData = this.clickDataSource.asObservable();
  public $data = this.dataSource.asObservable();

  constructor() { }

  public dataTransfer(data) {
    this.dataSource.next(data);
    // console.log('observer data: ', data);

  }

  public getClickData(data) {
    this.clickDataSource.next(data);
  }
}
