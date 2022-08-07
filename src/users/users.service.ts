import { LoginInput } from './dto/login.dto';
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
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.users.findOneBy({ email });
      if (exists) {
        return { ok: false, error: 'There is a user with that email already' };
      }

      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      console.log(e.message);
      return { ok: false, error: "Couldn't create account" };
    }
  }

  // LOG IN
  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      // find the user with the email
      const user = await this.users.findOneBy({ email });
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
        };
      }
      // check if the password is correct
      const checkPassword = await user.checkPassword(password);
      if (!checkPassword) {
        return {
          ok: false,
          error: 'Wrong password',
        };
      }
      // make a JWT
      return {
        ok: true,
        token: 'lalalala',
      };
    } catch (error) {
      console.log(error.message);
      return {
        ok: false,
        error,
      };
    }
  }
}
