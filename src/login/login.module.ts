import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { User } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule { }
