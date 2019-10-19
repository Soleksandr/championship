import { Entity, PrimaryKey, Property, OneToMany, IEntity, Collection } from 'mikro-orm';
import { Championship } from './Championship';

export interface IUserData {
  email: string;
  password: string;
}

@Entity()
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ unique: true })
  email: string;

  @Property()
  password: string;

  @OneToMany({ entity: () => Championship, mappedBy: 'user' })
  championship: any = new Collection<Championship>(this);

  constructor({ email, password }: IUserData) {
    this.email = email;
    this.password = password;
  }
}

export interface User extends IEntity {}
