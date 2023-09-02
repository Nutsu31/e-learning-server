import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule],
})
export class UsersModule {}
