import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounterComponentComponent } from '../super-counter-component/super-counter-component.component';
import SuperCounter from '../super-counter';

@Component({
  selector: 'counterList',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name = 'Counter Wall';
  counters: Counter[];

  @Input()
  superCounter: SuperCounter[];

  @Input()
  firstName: string;

  constructor() {
    this.counters = [];
    //this.superCounter = [];
  }

  ngOnInit() {}

  create() {
      const newCounter = new Counter();
      this.counters.push(newCounter);

      if (this.counters.length === 6) {
        let sum = this.counters.map(x=>x.value).reduce((sum, num)=> sum += num)
        const superC = new SuperCounter();
        superC.value = sum;
        this.superCounter.push(superC);
        this.counters = []
      }
    }

}
