/* eslint-disable prettier/prettier */
import { Content } from './content';
// Describe é para que eu possa descrever os meus testes
describe('Conteúdo de notificação', () =>{

it('deve ser possivel criar o conteúdo da minha notificação', () =>{
const content = new Content('Você recebeu uma notificação');

expect(content).toBeTruthy();
});

it('não deve ser possivel criar uma notificação com menos de 5 caracteres', () => {
  expect(() => new Content('aaa')).toThrow();
});

it('não deve ser possivel criar um notificação com mais de 240 caracteres', () =>{
  expect(()=> new Content('a'.repeat(241))).toThrow();
})
})