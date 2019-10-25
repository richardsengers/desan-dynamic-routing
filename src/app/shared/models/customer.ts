export class Customer {
  name: string;
  id: number;

  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
  }
}
