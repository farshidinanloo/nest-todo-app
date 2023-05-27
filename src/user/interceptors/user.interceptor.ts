import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { PublicURLs } from 'src/common/publicURL';

export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split('Bearer ')[1];

    if (PublicURLs.includes(request.originalUrl)) {
      return handler.handle();
    }

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      request.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return handler.handle();
  }
}
