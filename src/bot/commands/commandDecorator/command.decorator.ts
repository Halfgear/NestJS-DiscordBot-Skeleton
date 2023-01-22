/* eslint-disable @typescript-eslint/ban-types */
import { CommandOptions } from "./command-options";
import { COMMAND_DECORATOR } from "./command.constant";

/**
 * Command decorator
 *
 * Register new slash command
 */
export function Command(options: CommandOptions): ClassDecorator;
export function Command(options: CommandOptions): ClassDecorator {
  return <TFunction extends Function>(target: TFunction): TFunction | void => {
    Reflect.defineMetadata(COMMAND_DECORATOR, options, target.prototype);
    return target;
  };
}
