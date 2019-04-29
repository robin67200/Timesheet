export class Client {
  constructor(
    public name: string,
    public residence: string,
    public phone: string,
    public mail: string
  ) {
    this.id = 0;
  }
  id: number;
}