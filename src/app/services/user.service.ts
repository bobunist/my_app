import { Injectable } from '@angular/core';
import { users } from '../data/users';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(id: number): IUser 
  {
    let user = users.find(item => item.id === id) || users[2]
    return user
  }
  
}
