import { Injectable } from '@nestjs/common';
import { DbService } from 'db/db.service';
import { PatchAccountDto } from './dto';

@Injectable()
export class AccountService {
  constructor(private dbService: DbService) {}

  async getAccount(userId: number) {
    return await this.dbService.account.findUniqueOrThrow({
      where: {
        ownerId: userId,
      },
    });
  }

  async updateAccount(userId: number, patch: PatchAccountDto) {
    return await this.dbService.account.update({
      where: {
        ownerId: userId,
      },
      data: {
        ...patch,
      },
    });
  }

  async create(userId: number) {
    return await this.dbService.account.create({
      data: {
        ownerId: userId,
        isBlockingEnabled: false,
      },
    });
  }
}
