/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Length } from "class-validator";


/* eslint-disable prettier/prettier */
export class CreateNotificationBody {
    //Abaixando validando para que nada fique vazio e que o recipientId receba um número
    @IsNotEmpty()
    @IsUUID()
  recipientId: string;

//   Definindo o tamanho da palavra do content
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}