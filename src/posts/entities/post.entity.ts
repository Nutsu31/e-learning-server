import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  path: string;
  
  // @Column()
  // body: string;

  // @Column()
  // status: string;

  // @Column({ default: Date.now() })
  // created_at: Date;

  // @OneToMany(() => User, (user) => user.posts)
  // user: User;
}
