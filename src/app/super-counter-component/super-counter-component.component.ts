import { Component, OnInit, Input } from '@angular/core';
import SuperCounter from '../super-counter';

@Component({
  selector: 'superCounter',
  templateUrl: './super-counter-component.component.html',
  styleUrls: ['./super-counter-component.component.css']
})
export class SuperCounterComponentComponent implements OnInit {
  @Input()
  superCounter: SuperCounter;

  ngOnInit() { }

  incrementSuper() { 
    this.superCounter.value +=3; 
  }

  decrementSuper() { 
    this.superCounter.value -=3; 
  }

  start() {
    let i = 0;
    let plusOne = () => {
      if (i == 100) {
        clearInterval();
      }
    }

    setInterval(plusOne, 1000)
    plusOne()
  }


}

// function counter() {
//   var i = 0;
//   var funcNameHere = function(){
//       if (i == 100) clearInterval(this);
//       else console.log( 'Currently at ' + (i++) );
//   };
//   // This block will be executed 100 times.
//   setInterval(funcNameHere, 7000);
//   funcNameHere();
// } // End