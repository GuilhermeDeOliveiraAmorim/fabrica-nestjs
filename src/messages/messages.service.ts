import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'a',
    },
    {
      id: 2,
      text: 'b',
    },
  ];

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  findAll() {
    return this.messages;
  }

  create(message: Message) {
    this.messages.push(message);
  }
}
