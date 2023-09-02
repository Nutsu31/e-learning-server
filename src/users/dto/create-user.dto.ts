import { Post } from 'src/posts/entities/post.entity';

export class CreateUserDto {
  userName: string;
  posts: Post[];
  role: string;
  created_at: Date;
}
