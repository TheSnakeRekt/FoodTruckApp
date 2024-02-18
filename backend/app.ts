import {Server} from './src/server';
import 'reflect-metadata';
import Container from 'typedi';
import express from 'express';
import {LoggerService} from './src/services/loggerService';

const loggerService = Container.get(LoggerService);
const server = {instance: {} as Server};

try {
  Container.set('app', express());
  server.instance = new Server(Container.get('app'), loggerService);

  process.on('SIGINT', async () => {
    await server.instance?.stop();
  });
} catch (error) {
  loggerService.logger.error('Fatal error graceful shutting down', {
    meta: 'App',
  });

  //Do needed steps for graceful shutdown
  if (server.instance?.stop) {
    server.instance?.stop();
  }
  throw error;
}
