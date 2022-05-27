import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
const business = [
  TestModule
];
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'rm-7xv523c63p92931x96o.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'user',
    password: 'xNeDfyae^58EX6#',
    database: 'general_data',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), ...business],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
