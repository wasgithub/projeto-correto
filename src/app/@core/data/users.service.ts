
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'João Augusto', picture: 'assets/images/nick.png' },
    eva: { name: 'Monica Pereira', picture: 'assets/images/eva.png' },
    jack: { name: 'Wilian Silva', picture: 'assets/images/jack.png' },
    lee: { name: 'Matheus Ribeiro', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Silva', picture: 'assets/images/alan.png' },
    kate: { name: 'Wellinton Pires', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
