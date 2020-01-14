import jwt from 'jsonwebtoken';
import { IUser } from 'common/models/User';

export const _signToken = (email: IUser['email']): string => {
  return jwt.sign({ email }, process.env.JWT_SECRET as string, {
    expiresIn: '12h',
  });
};
