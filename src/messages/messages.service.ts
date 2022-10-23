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
    return message;
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);
    this.messages[index] = message;
    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);
    delete this.messages[index];
    return true;
  }
}
