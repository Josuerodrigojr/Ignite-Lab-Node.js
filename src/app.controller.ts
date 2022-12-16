import { CreateNotificationBody } from './infra/create-notification-body';
import { PrismaService } from './infra/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    // Retorna todos os elementos da minha tablea
    return this.prisma.notification.findMany();
  }

  @Post()
  //O que colocamos dentro do meu body, vai ser algo semelhante ao que uso com o res, req
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    // Cria um elemento na nossa tabela
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
