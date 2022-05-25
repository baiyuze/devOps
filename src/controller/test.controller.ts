import { Controller, Get, Post, Query } from '@nestjs/common';
import { TestService } from '../service/test.service';
import { Test } from '../entities/test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('all')
  getHello(): Promise<Test[]>  {
    return this.testService.findAll();
  }
  @Get('one')
  getOne(@Query() query): Promise<Test> {
    const id: string = query.id;
    return this.testService.findOne(id);
  }
}
