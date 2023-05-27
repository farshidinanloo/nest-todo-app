import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dtos/auth.dto';
import { User } from 'src/user/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }

  @Post('/login')
  signIn(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Get()
  me(@User() userId: string) {
    return userId;
  }
}
