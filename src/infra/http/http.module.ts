/* eslint-disable prettier/prettier */
import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../application/use-cases/send-notification';
import { NotificationController } from './controllers/notification.controller';
import {Module} from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  controllers: [
    NotificationController

  ],
  providers: [SendNotification]
})

export class HttpModule {}