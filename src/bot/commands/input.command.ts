import {
  UsePipes,
  Payload,
  DiscordTransformedCommand,
  TransformedCommandExecutionContext,
} from '@discord-nestjs/core';
import { TransformPipe } from '@discord-nestjs/common';
import { nameDTO } from './DTO/name.dto';
import { Injectable } from '@nestjs/common';
import { InteractionReplyOptions } from 'discord.js';
import { Command } from './commandDecorator/command.decorator';
@Injectable()
@Command({
  name: 'commandName',
  description: 'Basic command that requires an input',
  defaultMemberPermissions: 'UseApplicationCommands',
})

@UsePipes(TransformPipe)
export class inputCommand implements DiscordTransformedCommand<nameDTO> {
  async handler(
    @Payload() { name }: nameDTO,
    { interaction }: TransformedCommandExecutionContext,
  ): Promise<InteractionReplyOptions> {
    await interaction.reply(
      'output',
    )
    return;
  }
}
