/**
 * Es el encargado de vertificar en el redux router en qué ruta estamos
 *
 */

import { Component, OnInit } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import * as searcher from '@shared/components/searcher/interfaces';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  searcher: searcher.Out;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('init page');
    this.dataService.loadItems();
  }

  // recibe del componente buscador y guarda el objeto en searcher.
  onSearch(out: searcher.Out) {
    this.searcher = out;
    console.log(out.value);
  }

}
