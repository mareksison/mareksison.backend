import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { UpdateCheckinDto } from './dto/update-checkin.dto';
import { Checkins } from './entities/checkins.entity';

@Injectable()
export class CheckinsService {
  constructor(
    @InjectRepository(Checkins) private readonly checkinRepository: Repository<Checkins>,
  ) {}

  createCheckin(createCheckinDto: Array<CreateCheckinDto>): Promise<Array<Checkins>> {
    let checkin: Checkins;
    let checkins: Array<Checkins> = [];
    
    for (let x = 0 ; x < createCheckinDto.length ; x++){
      checkin = new Checkins();
      console.table(createCheckinDto[x]);

      checkin.userId = createCheckinDto[x].userId;
      checkin.hrs = createCheckinDto[x].hrs;
      checkin.tag = createCheckinDto[x].tag;
      checkin.checkinText = createCheckinDto[x].checkinText;
      checkin.checkinDate = createCheckinDto[x].checkinDate;
      checkin.timestamp = createCheckinDto[x].timestamp;

      checkins.push(checkin);
      this.checkinRepository.save(checkin)
    }
    return new Promise(() => { return checkins });
  }

  findAllCheckins() {
    return this.checkinRepository.find();
  }

  viewCheckin(id: number): Promise<Checkins> {
    return this.checkinRepository.findOneBy({ id });
  }

  viewCheckinByUser(userId: number): Promise<Array<Checkins>> {
    return this.checkinRepository.find({ where: {userId: userId }});
  }

  updateCheckin(id: number, updateCheckinDto: UpdateCheckinDto): Promise<Checkins> {
    const checkin: Checkins = new Checkins();
    checkin.hrs = updateCheckinDto.hrs;
    checkin.tag = updateCheckinDto.tag;
    checkin.checkinText = updateCheckinDto.checkinText;
    checkin.checkinDate = updateCheckinDto.checkinDate;
    checkin.timestamp = updateCheckinDto.timestamp;
    checkin.id = id;
    return this.checkinRepository.save(checkin);
  }

  removeCheckin(id: number) {
    return this.checkinRepository.delete(id);
  }
}
