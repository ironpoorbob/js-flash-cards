import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private clickDataSource = new Subject<any>();
  private dataSource = new Subject<any>();

  public $clickData = this.clickDataSource.asObservable();
  public $data = this.dataSource.asObservable();

  constructor() { }

  public dataTransfer(data) {
    this.dataSource.next(data);
    // console.log('data: ', data);

  }

  public getClickData(data) {
    this.clickDataSource.next(data);
  }
}
