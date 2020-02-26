import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Out } from './interfaces';


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
  constructor() { }

  ngOnInit() { }

  findItems(text) {
    this.outObj.value = text;
    this.out.emit(this.outObj);
  }

}
