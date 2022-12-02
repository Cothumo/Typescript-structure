import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
    readonly from: string, 
    private details: string, 
    public amount: number,
    public id?: number
  ){}

  format() {
    return `${this.from} owes €${this.amount} for ${this.details} id${this.id}`;
  }
}