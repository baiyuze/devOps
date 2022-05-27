import { Body, Controller, Get, Post, Query, HttpCode, UseFilters, BadGatewayException } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from './entities/test.entity';
import { ApiProperty, ApiOperation, ApiQuery } from '@nestjs/swagger'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Get('all')
  getHello(): Promise<Test[]> {
    return this.testService.findAll();
  }
  @Get('one')
  @ApiOperation({ summary: '根据ID获取数据' })
  @ApiQuery({ name: 'id' })
  getOne(@Query() query): Promise<Test> {
    const id: string = query.id;
    return this.testService.findOne(id);
  }
  @Post('insert')
  @HttpCode(204)
  async getInsert(@Body() body): Promise<any> {
    // INSERT INTO test(hha,xx,xx) VALUES('xxx','xxxq')
    // await this.testService.insert(body);
    // return true;
    // console.log(this.logger)
    throw new BadGatewayException('报错了');
  }


}
