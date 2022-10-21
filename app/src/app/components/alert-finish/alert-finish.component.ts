import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-finish',
  templateUrl: './alert-finish.component.html',
  styleUrls: ['./alert-finish.component.css']
})
export class AlertFinishComponent implements OnInit {
  @Output() updateAlert = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  closeCart(){
    this.updateAlert.emit(false)
  }
  openResult(){

  }
}
