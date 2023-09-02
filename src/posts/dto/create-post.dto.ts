import { User } from 'src/users/entities/user.entity';

export class CreatePostDto {
  id: number;
  titles: string;
  body: string;
  status: string;
  created_at: string;
  user: User;
}
