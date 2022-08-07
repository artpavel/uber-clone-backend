import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { MytationOutput } from './../../common/dto/output.dto';

@InputType()
export class LoginInput extends PickType(User, [
  'email',
  'password',
] as const) {}

@ObjectType()
export class LoginOutput extends MytationOutput {
  @Field(() => String, { nullable: true })
  token?: string;
}
