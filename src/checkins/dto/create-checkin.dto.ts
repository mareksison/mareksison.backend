import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

import { Dayjs } from 'dayjs'

export class CreateCheckinDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  hrs: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Tag must have atleast 2 characters.' })
  tag: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Checkin text must have atleast 3 characters.' })
  checkinText: string;

  @IsDate()
  @IsNotEmpty()
  checkinDate: Dayjs;

  @IsDate()
  @IsNotEmpty()
  timestamp: Dayjs;
}
