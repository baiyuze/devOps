import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entity'
import { LoginService } from './login.service';
const crypto = require("crypto");

@Controller('user')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post('login')
  /**
   * 登录后，生成token
   */
  async signIn() {
    // const a = await this.loginService.insertUserInfo();
    // return a;
  }

  @Post('reg')
  async registerAccount(@Body() body: User) {
    const { name, password, phone, email } = body;
    if (!name) throw new BadRequestException('name不能为空');
    if (password && !/^[a-z0-9_-]{6,18}$/.test(password)) throw new BadRequestException('password需为6-18位的字母或数字,可以为_-');
    if (phone && !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(phone)) throw new BadRequestException('手机号格式错误');
    if (email && !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) throw new BadRequestException('邮箱格式错误');
    const sha256 = crypto.createHash('sha256');
    sha256.update(password);
    const psd = sha256.digest("hex");
    const data: User = {
      name,
      password: psd,
      phone,
      createTime: String(Date.now()),
    };
    if (phone) data.phone = phone;
    if (email) data.email = email;
    try {
      await this.loginService.insertUserInfo(data);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
