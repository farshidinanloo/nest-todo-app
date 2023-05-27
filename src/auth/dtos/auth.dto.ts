import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsEmail({}, { message: 'ایمیل معتبر نمی باشد' })
  email: string;

  @MinLength(6, { message: 'حداقل طول پسورد 6 کاراکتر می باشد' })
  password: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'ایمیل معتبر نمی باشد' })
  email: string;

  @IsString()
  password: string;
}
