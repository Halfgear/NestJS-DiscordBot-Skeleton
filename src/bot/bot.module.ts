import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BotGateway } from './bot.gateway';
import { BaseInfoCommand } from './commands/basic.command';
import { inputCommand } from './commands/input.command';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, BaseInfoCommand, inputCommand],
})
export class BotModule {}
