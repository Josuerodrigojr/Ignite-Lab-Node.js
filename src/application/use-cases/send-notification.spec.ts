/* eslint-disable prettier/prettier */

import { SendNotification } from './send-notification';
describe('Mandando uma notificação', ()=>{
  it('Testando o envio de uma notificação', async ()=>{
const sendNotification = new SendNotification();

const {notification} = await sendNotification.execute({
  category: 'social',
  content: 'Enviando um conteudo',
  recipientId: 'hsdjdhsjak'

})
expect(notification).toBeTruthy();
  })
})