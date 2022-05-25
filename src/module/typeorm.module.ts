import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: '',
  port: 3306,
  username: 'user',
  password: '',
  database: 'general_data',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
})