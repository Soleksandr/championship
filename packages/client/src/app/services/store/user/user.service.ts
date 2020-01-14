import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { User } from '../../../types/User';
import { HttpRequestService } from '../../http-request/http-request.service';
import { PersisterService } from '../../persister/persister.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpRequestService, private router: Router, private persister: PersisterService) {
    const user = persister.getPersistedItem('user');

    if (user) {
      this.newUser = user;
    }
  }

  private readonly _user = new BehaviorSubject<Pick<User, 'email'>>(null);

  readonly user$ = this._user.asObservable();

  private set newUser(userData: Pick<User, 'email'>) {
    this._user.next(userData);
    this.router.navigateByUrl('/');
  }

  private setNewUser = ({ token }: { token: string }) => {
    const { email } = jwtDecode(token) as Pick<User, 'email'>;

    this.persister.persistItem({ name: 'token', data: token });
    this.persister.persistItem({ name: 'user', data: { email } });

    this.newUser = { email };
  };

  public get user() {
    return this._user;
  }

  public createUser(userData: User) {
    this.http.post<{ token: string }>('/users/sign_up', userData).subscribe(this.setNewUser);
  }

  public login(userData: User) {
    this.http.post<{ token: string }>('/users/sign_in', userData).subscribe(this.setNewUser);
  }

  public logout() {
    this.persister.deletePersistedItem('token');
    this.persister.deletePersistedItem('user');
    this.newUser = null;
  }
}
