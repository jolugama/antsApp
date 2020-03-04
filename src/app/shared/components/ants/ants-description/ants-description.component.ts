import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ants-description',
  templateUrl: './ants-description.component.html',
  styleUrls: ['./ants-description.component.scss'],
})
export class AntsDescriptionComponent implements OnInit {
  @Input() data = undefined;
  constructor() { }

  ngOnInit() { }

}
