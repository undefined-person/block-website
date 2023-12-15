import { Module } from '@nestjs/common';

import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule],
  controllers: [],
  providers: [DbService],
})
export class AppModule {}
