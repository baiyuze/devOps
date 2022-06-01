import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { User } from './entities/user.entity'
import { LoginService } from './login.service';
import { Validator } from '../common/decorator/validator.decorator';
const crypto = require("crypto");

@Controller('user')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }


  /**
   * 登录后，生成token
   */
  @Post('login')
  async signIn(@Body() body: User) {
    // const a = await this.loginService.insertUserInfo();
    // return a;
    return await this.loginService.signInGetToken();
  }

  @Post('reg')
  @Validator([
    { key: 'name', msg: 'name不能为空', required: true },
    { reg: /^[a-z0-9_-]{6,18}$/, key: 'password', msg: 'password需为6-18位的字母或数字,可以为_-', required: true },
    { reg: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, key: 'phone', msg: '手机号格式错误' },
    { reg: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, key: 'email', msg: '邮箱格式错误' }
  ])
  async registerAccount(@Body() body: User) {
    const { name, password, phone, email } = body;
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
