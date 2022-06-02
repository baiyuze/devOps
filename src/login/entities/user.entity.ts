import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('char', {
    length: 30,
  })
  name: string;

  @Column('char', {
    length: 30
  })
  account: string;

  @Column('char', {
    length: 30
  })
  createTime?: string;

  @Column()
  password: string;

  @Column('char', {
    length: 30
  })
  phone?: string;

  @Column('char', {
    length: 100
  })
  email?: string;

  @UpdateDateColumn()
  updateTime?: string;
}