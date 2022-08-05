import { CoreEntity } from './../../common/entities/core.entity';
import { Column, Entity } from 'typeorm';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEnum, IsString } from 'class-validator';

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
  @Column()
  @IsString()
  @Field(() => String)
  email: string;

  @Column()
  @IsString()
  @Field(() => String)
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @IsEnum(UserRole)
  @Field(() => UserRole)
  role: UserRole;
}
