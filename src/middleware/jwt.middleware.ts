import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
/**
 * 身份验证jwt
 */
export class JWTMiddleware implements NestMiddleware {
  private readonly logger = new Logger(JWTMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {

    // const json = (v) => JSON.stringify(v);
    // this.logger.log(`url: ${req.url} method: ${req.method}, query: ${json(req.query)}, body: ${json(req.body)}, params: ${json(req.params)} IP: ${req.ip}`);
    next();
  }
}
