import { join } from 'path';

export const logsPath = join(__dirname, './logs');

export const fileConfig = { fileConfig: { logsPath: logsPath } };
