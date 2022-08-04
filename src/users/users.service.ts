import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  // create account
  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      const exists = await this.users.findOne({ where: { email } });
      if (exists) {
        // make error
        return;
      }
      await this.users.save(this.users.create({ email, password, role }));
      return true;
    } catch (error) {
      // make error
      console.log(error.message);
      return;
    }
    // check email
    // create user & hash the password
  }
}
