/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { NotificationRepository } from '../repositories/notifications-repositories';
import { Notification } from './../entities/notification';
//O interface é para que eu possa receber e utilizar um objeto
interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse{
  notification: Notification
}

@Injectable()
export class SendNotification {
  constructor (private notificationRepository: NotificationRepository) {}


  async execute (request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const {recipientId, content, category} = request;

    const notification = new Notification({recipientId, content: new Content(content), category});

//Persisitir essa noticicação no banco de dados

await this.notificationRepository.create(notification)


    return {notification}
    
  }
}