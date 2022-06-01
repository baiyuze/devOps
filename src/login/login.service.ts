import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private readonly jwtService: JwtService

  ) { }

  insertUserInfo(data) {
    return this.userRepository.insert(data);
  }

  signInGetToken() {
    // 验证账号密码是否正确，生成token和返回用户信息
    const payload = {
      id: 'asasda',
      nickname: 'user.nickname',
      mobile: 'user.mobile',
    };
    const token = this.jwtService.sign(payload);

    return {
      token,
      userInfo: {}
    };
  }
}
