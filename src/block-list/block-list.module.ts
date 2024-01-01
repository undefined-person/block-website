import { Module } from '@nestjs/common';
import { BlocklistController } from './block-list.controller';
import { BlocklistService } from './block-list.service';
import { DbModule } from 'db/db.module';

@Module({
  imports: [DbModule],
  controllers: [BlocklistController],
  providers: [BlocklistService],
  exports: [BlocklistService],
})
export class BlocklistModule {}
