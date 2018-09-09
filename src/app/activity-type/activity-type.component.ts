import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.css']
})
export class ActivityTypeComponent implements OnInit {

  @Input() type;
  @Output() typeSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectType() {
    this.typeSelected.emit();
  }

}
