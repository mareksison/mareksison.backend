import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckinsService } from './checkins.service';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { UpdateCheckinDto } from './dto/update-checkin.dto';

@Controller('checkin')
export class CheckinsController {
  constructor(private readonly checkinsService: CheckinsService) {}

  @Post()
  create(@Body() createCheckinDto: Array<CreateCheckinDto>) {
    return this.checkinsService.createCheckin(createCheckinDto);
  }

  @Get()
  findAll() {
    return this.checkinsService.findAllCheckins();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkinsService.viewCheckin(+id);
  }

  @Get('search/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.checkinsService.viewCheckinByUser(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckinDto: UpdateCheckinDto) {
    return this.checkinsService.updateCheckin(+id, updateCheckinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkinsService.removeCheckin(+id);
  }
}
