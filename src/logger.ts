import { createLogger, format, transports } from 'winston';

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const options = {
  // To see more detailed errors, change this to 'debug'
  level: 'info',
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ],
  silent:false
}

if(process.env.NODE_ENV === 'test') {
  options.silent = true
}

const logger = createLogger();

export default logger;
