
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from '../service/test.service';
import { TestController } from '../controller/test.controller';
import { Test } from '../entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule { }