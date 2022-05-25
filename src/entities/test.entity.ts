import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: string;

  @Column()
  hha: string;

  @Column()
  asa: string;

  @Column()
  alskafl: string;

  @Column()
  lkas: string;
}