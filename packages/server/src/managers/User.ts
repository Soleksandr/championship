import bcrypt from 'bcrypt';

import db, { User, IUserData } from '../db';
import { IUser } from 'common/models/User';
import { _signToken } from '../services/token';

export class UserManager {
  public async create(userData: IUserData): Promise<IUser['email']> {
    const password = await this.hashPassword(userData.password);

    await db.user.persist(new User({ ...userData, password }));

    return _signToken(userData.email);
  }

  public async login({ email, password }: IUser): Promise<string> {
    const user = await db.user.findOne({ email });

    if (!user) {
      throw new Error('Unknown email address');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Wrong password');
    }

    return _signToken(user.email);
  }

  private async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  private async checkPassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}

export default new UserManager();
