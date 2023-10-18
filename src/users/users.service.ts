import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.name = createUserDto.name;
    user.team = createUserDto.team;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  findAllUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<Users> {
    return this.userRepository.findOneBy({ id });
  }

  viewByUsername(username: string): Promise<Users> {
    return this.userRepository.findOne({ where: {username: username }});
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
    const user: Users = new Users();
    user.name = updateUserDto.name;
    user.team = updateUserDto.team;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
