import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timerRef : ReturnType<typeof setInterval> | undefined;
  counter : number;
  @Output() time = new EventEmitter<{timeElapsed : number}>();
  constructor() {
    this.counter = 0;
    this.timerRef = undefined;
   }

  ngOnInit(): void {
  }

  startTimer(){
    this.timerRef = setInterval( () => {
      this.counter++;
        this.time.emit({
          timeElapsed: this.counter
        })
        console.log(this.counter);
    } ,1000)
  }

  stopTimer(){
    clearInterval(this.timerRef);
    this.timerRef = undefined;
    this.counter = 0;
  }

}
