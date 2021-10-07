import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get("DB_HOST", 'localhost'),
        port: Number(configService.get("DB_PORT", 3306)),
        username: configService.get("DB_USERNAME", 'root'),
        password: configService.get("DB_PASSWORD", 'root'),
        database: configService.get("DB_DATABASE", 'todo'),
        entities: [],
        synchronize: true,
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
