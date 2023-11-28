import { Injectable } from '@angular/core';
import { users } from '../../data/users';
import { IUser } from '../../models/user';
import { AbstractUserService } from './i-user-service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements AbstractUserService {

  getUser(id: number): IUser 
  {
    let user = users.find(item => item.id === id) || users[2]
    return user
  }
  
}
