import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
// import { JwtMiddleware } from './middleware/jwt.middleware';
import { LoginModule } from './login/login.module';

const business = [
  TestModule,
  LoginModule
];
@Module({
  imports: [TypeOrmModule.forRoot(), ...business],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
    // consumer.apply(JwtMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });

  }
}
