import { DiscordCommand } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ContextMenuCommandInteraction, EmbedBuilder } from 'discord.js';
import { Command } from './commandDecorator/command.decorator';

@Injectable()
@Command({
  name: 'basicCommand',
  description: 'Basic command',
  defaultMemberPermissions: 'UseApplicationCommands',
})

export class BaseInfoCommand implements DiscordCommand {
  handler(interaction: ContextMenuCommandInteraction): any {

    return interaction.reply("message");
  }
}
