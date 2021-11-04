import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CouresesController {
 
  @Get()
  findAll(): any {
    return {
        message: 'Hello World'
    };
  }
}
