import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/404')
  getError(): string {
    return this.appService.getError();
  }
}
