import { Module } from '@nestjs/common';

import { DbModule } from 'db/db.module';
import { UsersService } from './users.service';
import { AccountModule } from 'account/account.module';

@Module({
  imports: [DbModule, AccountModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
