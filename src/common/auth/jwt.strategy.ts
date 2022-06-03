import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginService } from '../../login/login.service';
import { User } from '../../login/entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    // private readonly jwtService: JwtService
    // private readonly loginService: LoginService
  ) {

    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: true,
      secretOrKey: 'dev_ops',
    });
  }

  async getUser(user): Promise<User> {
    const userInfo: User = await this.userRepository.findOne(user);
    return userInfo;
  }

  // 在此获取用户信息，和写入用户过期数据
  async validate(payload: any) {
    // console.log(payload, 'payload')
    // 在此添加一个token过期的逻辑
    if (Date.now() >= (payload.exp * 1000)) {
      return 'token过期';
    }
    const user = { id: payload.id, name: payload.name, account: payload.account };
    const userInfo = await this.getUser(user);
    if (userInfo) {
      delete userInfo.password;
      return userInfo;
    }
    return false;
  }
}