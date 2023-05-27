import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';

interface JWTPayload {
  id: string;
  iat: number;
  exp: number;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (roles && roles.length) {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization?.split('Bearer ')[1];

      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
        const user = await this.prismaService.user.findUnique({
          where: { id: payload.id },
        });
        if (!user) return false;

        return roles.includes(user.user_type);
      } catch (error) {
        throw new HttpException('token is invalid', 401);
      }
    }

    return true;
  }
}
