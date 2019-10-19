import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../../types/User';
import { HttpRequestService } from '../../http-request/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpRequestService) {}

  private readonly user = new BehaviorSubject<User>(null);

  readonly user$ = this.user.asObservable();

  private set newUser(userData: User) {
    this.user.next(userData);
  }

  private setNewUser(userData: User) {
    this.newUser = userData;
  }

  public createUser(userData: User) {
    this.http.post<User>('/users', userData).subscribe(this.setNewUser);
  }
}
