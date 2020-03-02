/**
 * Pass Through
 * - devuelve datos de searcher al padre
 * - envía items a item-box. 
 *
 */

import { Component, OnInit, OnDestroy, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import * as searcher from '@shared/components/searcher/interfaces';



@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  public searcherEmitter = new EventEmitter<searcher.Out>();
  public dataItems: any;
  public data = {
    title: ''
  };
  public innerWidth = window.innerWidth;

  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {

  }



  // recibe del componente buscador y guarda el objeto en searcher.
  onSearch(data: searcher.Out) {
    this.searcherEmitter.emit(data);

  }


  openFilter() {
    console.log('openFilter');
    this.router.navigate([`/ants/filter`]);
  }


  ngOnDestroy(): void {
    alert('delete');
    throw new Error('se destruye item-page');
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
