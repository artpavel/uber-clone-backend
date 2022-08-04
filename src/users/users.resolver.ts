import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { UserService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => Boolean)
  hi() {
    return true;
  }

  @Mutation(() => CreateAccountOutput)
  createAccount(@Args('input') dto: CreateAccountInput) {}
}
