import { Module } from '@nestjs/common'; //users.module.ts es como el índice de todos los elementos users.
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
