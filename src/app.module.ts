import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodeModule } from './node/node.module';
import { MongooseModule } from '@nestjs/mongoose';
import CONFIG from 'utils/config';

@Module({
  imports: [MongooseModule.forRoot(CONFIG.MONGODB_URI), NodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
