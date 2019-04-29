import { Day } from 'src/app/day/model/day';

export class Projet {

  days: Day[];

  constructor(
    public name: string,
    public type: string,
    public price: number,
    public clientId: number,
    
  ) {
    this.id = 0;
    this.days = Array<Day>();
  }

  id: number;
}
