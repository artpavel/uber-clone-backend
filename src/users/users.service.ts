import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  // create account
  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      const exists = await this.users.findOneBy({ email: email });
      if (exists) {
        return 'There is a user with that email already';
      }

      await this.users.save(this.users.create({ email, password, role }));
    } catch (e) {
      console.log(e.message);
      return "Couldn't create account";
    }
  }
}
