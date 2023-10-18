import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Dayjs } from 'dayjs';

@Entity()
export class Checkins {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' }) //conected to the respective id in the users table
  userId: number;

  @Column({ type: 'float' })
  hrs: number;

  @Column({ type: 'varchar', length: 50 })
  tag: string;

  @Column({ type: 'varchar', length: 100 })
  checkinText: string;

  @Column({ type: 'date' })
  checkinDate: Dayjs;

  @Column({ type: 'timestamptz' })
  timestamp: Dayjs;
}

