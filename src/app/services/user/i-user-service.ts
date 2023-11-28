import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractUserService {
  abstract getUser(id: number): IUser;
}
