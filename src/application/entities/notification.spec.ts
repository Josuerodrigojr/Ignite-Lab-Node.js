/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';
// Describe é para que eu possa descrever os meus testes
describe('Notificação', () =>{

it('deve ser possivel criar uma notificação', () =>{
const notification = new Notification({
  recipientId: 'hjhjh',
  content: new Content ('nova solicitação de amizade'),
  category: 'Social',
});

expect(notification).toBeTruthy();
});

})