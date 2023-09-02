import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly userRepository: Repository<Post>,
  ) {}
  async create(path: string, title: string) {
    try {
      const post = new Post();
      post.path = path;
      post.title = title;
      await this.userRepository.save(post);
    } catch (err) {
      throw new Error(err);
    }
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
