import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * 将返回的数据进行合并组装，保证统一类型
 */
@Injectable()
export class DataPackage implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => ({
          msg: 'success',
          data: data || null,
          code: 200
        }))
      );
  }
}