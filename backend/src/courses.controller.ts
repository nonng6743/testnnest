import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CouresesController {
 
  @Get()
  findAll(): any {
    return [
      { 
        id: '100', 
        number: '01202111',
        title: "Computer and Pro"
      },
      {
        id: '200', 
        number: '54354',
        title: "Csfsfsfssferro"
      },
      {
        id: '300', 
        number: '453453',
        title: "eerwrwefsf"
      },
    ];
  }
}
