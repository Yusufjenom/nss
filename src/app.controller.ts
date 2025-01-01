import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res, @Req() req): any {
    //return this.appService.getHello();
    console.log(req.rawHeaders);
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
