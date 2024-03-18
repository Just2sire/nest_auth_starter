import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  getHello(@Body() data: User): any {
    return this.authService.login(data);
    // return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/test')
  async data() {
    return 'success';
  }
}
