import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloget(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloPost(): string {
    return this.appService.postHello();
  }
}
