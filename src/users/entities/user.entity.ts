import { CoreEntity } from './../../common/entities/core.entity';
import { Column, Entity } from 'typeorm';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

enum UserRole {
  Client,
  Owner,
  Delivery,
}

// for graphql
registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => UserRole)
  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;
}
