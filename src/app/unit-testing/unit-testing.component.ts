import { Component, OnInit } from '@angular/core';

interface DataObject {
  dataString: string;
  number: number;
}

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css'],
})
export class UnitTestingComponent implements OnInit {
  public data: DataObject;
  constructor() {}

  ngOnInit(): void {}

  private doubleValue(numberValue: number): number {
    return numberValue * 2;
  }

  private createSomeStuff(): DataObject {
    const string = 'Hello World';
    const number = this.doubleValue(2);

    return {
      dataString: string,
      number: number,
    };
  }
}
