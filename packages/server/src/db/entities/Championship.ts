import { Entity, PrimaryKey, Property, IEntity, ManyToOne } from 'mikro-orm';
import { User } from './User';

@Entity()
export class Championship {
  @PrimaryKey()
  id: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name: string;

  @ManyToOne({ entity: () => User })
  user: User;

  constructor(name: string) {
    this.name = name;
  }
}

export interface Championship extends IEntity {}
