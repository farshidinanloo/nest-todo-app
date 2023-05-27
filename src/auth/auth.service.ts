import {
  ConflictException,
  BadRequestException,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dtos/auth.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async signup({ email, password }: SignupDto) {
    const emailExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (emailExists) {
      throw new ConflictException(
        'ایمیل قبلا ثبت شده است لطفا از ایمیل دیگری استفاده نمایید',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: { email, password: hashedPassword, user_type: 'user' },
    });

    const token = this.generateJWT(user.id);

    return { token };
  }

  async login({ email, password }: LoginDto) {
    if (!email) {
      throw new BadRequestException();
    }

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException('کاربر وجود ندارد', 400);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('پسورد اشتباه است', 400);
    }

    const token = this.generateJWT(user.id);

    return { token };
  }

  private generateJWT(id: string) {
    return jwt.sign(
      {
        id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '90 days',
      },
    );
  }
}
