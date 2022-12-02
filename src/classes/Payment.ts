import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter{
  constructor(
    readonly to: string,
    private details: string,
    public amount: number,
  ){};

  format() {
    return`${this.to} is owed €${this.amount} for ${this.details}`;
  }
}