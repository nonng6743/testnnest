import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  async findAll(): Promise<Course[]> {
    return [
      {
        id: '100',
        number: '01202111',
        title: 'Computer and Pro',
      },
      {
        id: '200',
        number: '54354',
        title: 'Csfsfsfssferro',
      },
      {
        id: '300',
        number: '453453',
        title: 'eerwrwefsf',
      },
    ];
  }
}
