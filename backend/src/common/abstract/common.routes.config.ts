import {Application} from 'express';
import {Container} from 'typedi';
import {LoggerService} from '../../services/loggerService';
import {Logger} from 'winston';

export abstract class CommonRoutesConfig {
  logger: Logger;

  app: Application;
  name: string;

  private loggerService = Container.get(LoggerService);

  constructor(name: string) {
    this.name = name;
    this.app = Container.get('app');
    this.logger = this.loggerService.logger;
    this.logger.defaultMeta = {meta: 'Route'};

    this.configureRoutes();
  }

  getName() {
    return this.name;
  }

  abstract configureRoutes(): Application;
}
