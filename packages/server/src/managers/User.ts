import db, { User, IUserData } from '../db';

export class UserManager {
  public async create(userData: IUserData): Promise<IUserData['email']> {
    await db.user.persist(new User(userData));
    return userData.email;
  }
}

export default new UserManager();
