/* eslint-disable prettier/prettier */
import { PrismaNotificationMapper } from './../mappers/prisma-notifications-mapper';
import { Notification } from './../../../../application/entities/notification';
import { PrismaService } from './../prisma.service';
import { NotificationRepository } from '../../../../application/repositories/notifications-repositories';

export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService){}
  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }



  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.create({
      data: raw,
    })
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

}