import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'a',
    },
    {
      id: 2,
      text: 'b',
    },
  ];

  findAll() {
    return this.messages;
  }
}
