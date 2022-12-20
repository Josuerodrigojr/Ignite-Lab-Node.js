/* eslint-disable prettier/prettier */
import { Content } from './../entities/content';
import { Notification } from '../../application/entities/notification';
import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notifications';




describe('Cancelando o envio de uma notificação', ()=>{
  it('Testando o cancelamento de uma notificação', async ()=>{

    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);
const notification = new Notification({
  category: 'social',
  content: new Content ('Nova solicitação de amizade'),
  recipientId: 'example-recipient-id'
})

await notificationsRepository.create(notification);
  
  await cancelNotification.execute({
  notificationId: notification.id,
})
expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date))

  })
})