import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { User } from './entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../common/auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'dev_ops',
      signOptions: {
        //token的有效时长
        expiresIn: '30s',
      }
    })],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy]
})
export class LoginModule { }
