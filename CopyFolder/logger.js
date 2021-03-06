//import winston,{ createLogger, transports }from 'winston';
import pkg from 'winston';
const { createLogger, transports, format} = pkg;

//const format = winston.format;

// export const logger = createLogger({
//     level: 'info',
//     format: format.combine(
//       format.timestamp({
//         format: 'YYYY-MM-DD HH:mm:ss'
//       }),
//       format.errors({ stack: true }),
//       format.splat(),
//       format.json()
//     ),
//     defaultMeta: { service: 'your-service-name' },
//     transports: [
//       //
//       // - Write to all logs with level `info` and below to `quick-start-combined.log`.
//       // - Write all logs error (and below) to `quick-start-error.log`.
//       //
//       new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
//       new transports.File({ filename: 'quick-start-combined.log' })
//     ]
//   });

//   if (process.env.NODE_ENV !== 'production') {
//     logger.add(new transports.Console({
//       format: format.combine(
//         format.colorize(),
//         format.simple()
//       )
//     }));
//   }

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.Console({}),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

  
