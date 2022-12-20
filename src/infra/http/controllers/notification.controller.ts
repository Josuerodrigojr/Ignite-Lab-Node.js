/* eslint-disable prettier/prettier */
import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from './../../../application/use-cases/send-notification';
import { CreateNotificationBody } from './../dtos/create-notification-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotification){}
  @Post()
  //O que colocamos dentro do meu body, vai ser algo semelhante ao que uso com o res, req
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    // Cria um elemento na nossa tabela
    const {notification} = await this.sendNotification.execute({
      recipientId, 
      content, 
      category
    })

    return {notification: NotificationViewModel.toHTTP(notification)}
  }
}
