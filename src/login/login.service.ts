import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  insertUserInfo(data) {
    return this.userRepository.insert(data);
  }
}
