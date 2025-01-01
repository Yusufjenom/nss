import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): any {
    //return this.appService.getHello();
    const cat = new Cat('Francesca', 2);
    res.status(200).json({
      success: true,
      data: cat,
    });
  }
}

class Cat {
  constructor(
    private name: string,
    private age: number,
  ) {
    this.name = name;
    this.age = age;
  }
}
