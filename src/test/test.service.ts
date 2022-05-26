import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) { }

  findAll(): Promise<Test[]> {
    return this.testRepository.find();
  }

  findOne(id: string): Promise<Test> {
    // SELECT id,xx,xx from test WHERE id=xx;
    return this.testRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.testRepository.delete(id);
  }

  async insert(testMap: Test): Promise<void> {
    await this.testRepository.insert(testMap);
  }
}