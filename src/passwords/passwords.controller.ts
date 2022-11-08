import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePasswordDto, UpdatePasswordDto } from './passwords.dto';
import { PasswordsService } from './passwords.service';

@Controller('api/passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Post()
  create(@Body() createPasswordDto: CreatePasswordDto) {
    return this.passwordsService.create(createPasswordDto);
  }

  @Get()
  findAll() {
    return this.passwordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passwordsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasswordDto: UpdatePasswordDto) {
    return this.passwordsService.update(id, updatePasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passwordsService.remove(id);
  }
}
