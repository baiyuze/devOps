import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http.exception';
import { DataPackage } from './common/data.interceptor'
import { Logger } from './common/log4js';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    {
      logger: new Logger() // 这里指定了新的nest日志
    }
  );
  app.useGlobalFilters(new HttpExceptionFilter());//错误信息统一包装拦截
  app.useGlobalInterceptors(new DataPackage());//拦截数据进行包装
  await app.listen(3000);
}
bootstrap();
