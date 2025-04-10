import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findOne(id: number): User | null {
    return await this.userService.findOne(id);
  }
}
