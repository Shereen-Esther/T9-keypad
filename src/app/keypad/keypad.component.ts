import { Component, OnInit } from '@angular/core';
import { start } from 'repl';
let count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})

export class KeypadComponent implements OnInit {
  a: any;
  b: any = '';
  interval: any;
  counter: any = 3;
  ms: any;
  onItemSelector(value: any) {
    if (value == 'space') {
      this.a = ' ';
      this.b = this.b + this.a;
    }

    if (value == 'del') {
      this.b = ' ';
      // this.b = this.b + this.a;
    }

    if (value == 0) {
      this.a = '0';
      this.b = this.b + this.a;
    }

    if (value == 1) {
      this.a = '1';
      this.b = this.b + this.a;
    }

    if (value == 2) {
      count2++;
      if (count2 == 1) {
        this.a = '2';
        this.b = this.b + this.a;
      }
      if (count2 == 2) {
        this.a = 'a';
        this.b = this.b + this.a;
      }
      if (count2 == 3) {
        this.a = 'b';
        this.b = this.b + this.a;
      }
      if (count2 == 4) {
        this.a = 'c';
        this.b = this.b + this.a;
        count2 = 0;
      }
    }

    if (value == 3) {
      count3++;
      count2 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
      if (count3 == 1) {
        this.a = '3';
        this.b = this.b + this.a;
      }
      if (count3 == 2) {
        this.a = 'd';
        this.b = this.b + this.a;
      }
      if (count3 == 3) {
        this.a = 'e';
        this.b = this.b + this.a;
      }
      if (count3 == 4) {
        this.a = 'f';
        this.b = this.b + this.a;
        count3 = 0;
      }
    }

    if (value == 4) {
      count4++;
      count2 = 0, count3 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
      if (count4 == 1) {
        this.a = '4';
        this.b = this.b + this.a;
      }
      if (count4 == 2) {
        this.a = 'g';
        this.b = this.b + this.a;
      }
      if (count4 == 3) {
        this.a = 'h';
        this.b = this.b + this.a;
      }
      if (count4 == 4) {
        this.a = 'i';
        this.b = this.b + this.a;
        count4 = 0;
      }
    }

    if (value == 5) {
      count5++;
      count2 = 0, count3 = 0, count4 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
      if (count5 == 1) {
        this.a = '5';
        this.b = this.b + this.a;
      }
      if (count5 == 2) {
        this.a = 'j';
        this.b = this.b + this.a;
      }
      if (count5 == 3) {
        this.a = 'k';
        this.b = this.b + this.a;
      }
      if (count5 == 4) {
        this.a = 'l';
        this.b = this.b + this.a;
        count5 = 0;
      }
    }

    if (value == 6) {
      count6++;
      count2 = 0, count3 = 0, count4 = 0, count5 = 0, count7 = 0, count8 = 0, count9 = 0;
      if (count6 == 1) {
        this.a = '6';
        this.b = this.b + this.a;
      }
      if (count6 == 2) {
        this.a = 'm';
        this.b = this.b + this.a;
      }
      if (count6 == 3) {
        this.a = 'n';
        this.b = this.b + this.a;
      }
      if (count6 == 4) {
        this.a = 'o';
        this.b = this.b + this.a;
        count6 = 0;
      }
    }

    if (value == 7) {
      count7++;
      count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count8 = 0, count9 = 0;
      if (count7 == 1) {
        this.a = '7';
        this.b = this.b + this.a;
      }
      if (count7 == 2) {
        this.a = 'p';
        this.b = this.b + this.a;
      }
      if (count7 == 3) {
        this.a = 'q';
        this.b = this.b + this.a;
      }
      if (count7 == 4) {
        this.a = 'r';
        this.b = this.b + this.a;
      }
      if (count7 == 5) {
        this.a = 's';
        this.b = this.b + this.a;
        count7 = 0;
      }
    }

    if (value == 8) {
      count8++;
      count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count9 = 0;
      if (count8 == 1) {
        this.a = '8';
        this.b = this.b + this.a;
      }
      if (count8 == 2) {
        this.a = 't';
        this.b = this.b + this.a;
      }
      if (count8 == 3) {
        this.a = 'u';
        this.b = this.b + this.a;
      }
      if (count8 == 4) {
        this.a = 'v';
        this.b = this.b + this.a;
        count8 = 0;
      }
    }

    if (value == 9) {
      count9++;
      count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0;
      if (count9 == 1) {
        this.a = '9';
        this.b = this.b + this.a;
      }
      if (count9 == 2) {
        this.a = 'w';
        this.b = this.b + this.a;
      }
      if (count9 == 3) {
        this.a = 'x';
        this.b = this.b + this.a;
      }
      if (count9 == 4) {
        this.a = 'y';
        this.b = this.b + this.a;
      }
      if (count9 == 5) {
        this.a = 'z';
        this.b = this.b + this.a;
        count9 = 0;
      }
    }

    
  }

  constructor() { 
    
  }
  
  //start function
  function:void ;start()
  {
    let counter = 2;
    setInterval(function() {
      counter--;
      if (counter == 0) {
          count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
          clearInterval(counter);
      }
    }, 1000);
    
  }

  ngOnInit(): void {
  }
}