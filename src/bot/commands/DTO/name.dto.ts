import { Param } from '@discord-nestjs/core';
export class nameDTO {
  @Param({
    name: 'InputName',
    description: 'input that you want to require',
    required: true,
  })
  name: string;
}
