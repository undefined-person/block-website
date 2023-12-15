import { Injectable } from '@nestjs/common';
import { DbService } from 'db/db.service';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async findByEmail(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }

  async createUser(email: string, hash: string, salt: string) {
    return await this.db.user.create({
      data: {
        email,
        hash,
        salt,
      },
    });
  }
}
