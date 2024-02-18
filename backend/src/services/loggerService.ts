import { Service } from "typedi";
import winston, { createLogger } from "winston";

@Service()
export class LoggerService {
  logger;

  private static readonly alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
      all: true,
    }),
    winston.format.label({
      label: "[WEBAPI]",
    }),
    winston.format.timestamp({
      format: "DD-MM-YY HH:mm:ss",
    }),
    winston.format.printf(
      ({ label, timestamp, meta, level, message }) =>
        `${label}  ${timestamp} | ${meta} [${level}] : ${message}`
    )
  );

  constructor() {
    this.logger = createLogger({
      levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
      },
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            LoggerService.alignColorsAndTime
          ),
        }),
      ],
    });
  }
}
