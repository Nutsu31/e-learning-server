import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  role: string;

  @Column({ default: Date.now() })
  created_at: Date;

  @ManyToOne(() => Post, (post) => post?.user)
  posts: Post[];
}
