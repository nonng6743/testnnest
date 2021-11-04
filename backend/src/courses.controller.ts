import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course.interface';
@Controller('courses')
export class CouresesController {
  constructor(private coursesServive: CoursesService) {}

   
  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesServive.findAll();
  }
}
