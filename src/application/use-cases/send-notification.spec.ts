/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';




describe('Mandando uma notificação', ()=>{
  it('Testando o envio de uma notificação', async ()=>{

    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

const {notification} = await sendNotification.execute({
  category: 'social',
  content: 'Enviando um conteudo',
  recipientId: 'hsdjdhsjak'

})
expect(notificationsRepository.notifications).toHaveLength(1)
expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
})