/* eslint-disable prettier/prettier */
import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { NotificationRepository } from '../repositories/notifications-repositories';
import { Notification } from './../entities/notification';
//O interface é para que eu possa receber e utilizar um objeto
interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor (private notificationRepository: NotificationRepository) {}


  async execute (request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const {notificationId} = request;

    const notification = await this.notificationRepository.findById(
      notificationId
    )

    if (!notification){
      throw new NotificationNotFound();
    }
    notification.cancel();

    await this.notificationRepository.save(notification)

  }
}