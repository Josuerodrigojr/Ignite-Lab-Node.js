/* eslint-disable prettier/prettier */
import { Replace } from './../../helpers/Replace';

import { Content } from './content';


export class NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, {createdAt?: Date}>) {
    this.props = {...props,
    createdAt: props.createdAt ?? new Date(),}
  }
//Lembrando que set é o recebimento de dados e o get é a visualização de dados para o usuário.
  public set content(content:Content){
    this.props.content = content
  }

  
  public get content():Content{
    return this.props.content
  }

  public set category (category:string){
    this.props.category = category
  }

  public get category(): string{
    return this.props.category
  }

  public set recipientId (recipientId:string){
    this.props.recipientId = recipientId
  }

  public get recipientId(): string{
    return this.props.recipientId
  }

  public set readAt (readAt: Date | null | undefined){
    this.props.readAt = readAt
  }

  public get readAt(): Date | null | undefined{
    return this.props.readAt
  }


  public get createAt(): Date{
    return this.props.createdAt
  }
}