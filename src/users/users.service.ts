import { Injectable } from '@nestjs/common';
import { AccountService } from 'account/account.service';
import { DbService } from 'db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
  ) {}

  async findByEmail(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }

  async createUser(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({
      data: {
        email,
        hash,
        salt,
      },
    });

    await this.accountService.create(user.id);

    return user;
  }
}
