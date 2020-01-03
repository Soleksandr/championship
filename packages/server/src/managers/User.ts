import bcrypt from 'bcrypt';

import db, { User, IUserData } from '../db';
import { IUser } from 'common/models/User';

export class UserManager {
  public async create(userData: IUserData): Promise<IUser['email']> {
    const password = await this.hashPassword(userData.password);

    await db.user.persist(new User({ ...userData, password }));

    return userData.email;
  }

  // public login();

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private async checkPassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}

export default new UserManager();
