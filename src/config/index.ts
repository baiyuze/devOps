export default {
  mysql: {
    type: 'mysql',
    host: 'rm-7xv523c63p92931x96o.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'user',
    password: 'xNeDfyae^58EX6#',
    database: 'general_data',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  },
  redis: {

  }
}