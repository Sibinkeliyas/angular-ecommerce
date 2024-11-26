export class Checkout {
  firstName: string;
  lastName: string;
  country: string;
  address: {
    streetAdress: string;
    apartment: string;
    city: string;
    postCode: string;
  };
  phone: string;
  email: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.address = {
      streetAdress: '',
      apartment: '',
      city: '',
      postCode: '',
    };
    this.country = '';
    this.email = '';
    this.phone = '';
  }
}
