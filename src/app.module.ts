import { Module } from '@nestjs/common';

import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule],
  controllers: [],
  providers: [DbService],
})
export class AppModule {}
