import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Out } from './interfaces';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {

  @Output() out = new EventEmitter<Out>();
  outObj: Out = {
    value: ''
  };

  private outSource$ = new Subject<void>();
  public out$ = this.outSource$.asObservable();


  constructor() { }

  ngOnInit() { }

  findItems(text) {
    this.outObj.value = text;
    this.out.emit(this.outObj);
  }

  findItems2() {
    this.outObj.value = '';
    this.out.emit(this.outObj);
  }

}
