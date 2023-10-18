import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { CheckinsModule } from './checkins/checkins.module';
import { Checkins } from './checkins/entities/checkins.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rain.db.elephantsql.com',
      port: 5432,
      password: 'v-LA_mWjAmNYZkd5yWG8Uw2BYBjbH6fz',
      username: 'yfefjkiw',
      entities: [Users, Checkins],
      database: 'yfefjkiw',
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UsersModule,
    CheckinsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
