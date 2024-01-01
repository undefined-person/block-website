import { Module } from '@nestjs/common';

import { DbModule } from 'db/db.module';
import { UsersService } from './users.service';
import { AccountModule } from 'account/account.module';
import { BlocklistModule } from 'block-list/block-list.module';

@Module({
  imports: [DbModule, AccountModule, BlocklistModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
