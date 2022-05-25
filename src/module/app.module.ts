import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import TypeOrmModule from "./typeOrm.module";
import { TestModule } from './test.module';

@Module({
  imports: [TypeOrmModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private : Connection) { }
}
