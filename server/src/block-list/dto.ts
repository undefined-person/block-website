import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blocklistId: number;

  @ApiProperty({
    enum: [$Enums.BlockListType.Keyword, $Enums.BlockListType.Website],
  })
  type: $Enums.BlockListType;

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[];
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockListType.Keyword, $Enums.BlockListType.Website],
  })
  @IsIn([$Enums.BlockListType.Keyword, $Enums.BlockListType.Website])
  type: $Enums.BlockListType;

  @ApiProperty()
  data: string;
}

export class BlockListQueryDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  q?: string;
}
