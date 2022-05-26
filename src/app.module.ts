import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
const business = [
  TestModule
];
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '',
    port: 3306,
    username: 'user',
    password: '',
    database: 'general_data',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), ...business],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private : Connection) { }
}
