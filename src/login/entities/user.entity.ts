import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  createTime?: string;

  @Column()
  password?: string;

  @Column()
  phone?: string;

  @Column()
  email?: string;

  @Column()
  updateTime?: string;
}