/* eslint-disable prettier/prettier */
import { Notification } from './../../src/application/entities/notification';

import { NotificationRepository } from "src/application/repositories/notifications-repositories";




export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = []

  async create(notification: Notification){
    this.notifications.push(notification)
  }
}