const { transports, createLogger, format } = require('winston')

const { combine, printf } = format

const logTime = new Date().toLocaleString()

const customLog = printf(
  ({ level, message }) => `[${level} - level]: ${message} | [LogTime]:${logTime}`
)

const date = new Date()
const newdate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
const options = {
  info: {
    level: 'info',
    dirname: 'logs',

    json: true,
    handleExceptions: true,
    maxSize: '10',
    zippedArchived: true,
    filename: `combined-${newdate}.log`,
    datePattern: 'YYYY-MM-DD-HH',
  },
  error: {
    level: 'error',
    dirname: 'logs',
    json: true,
    handleExceptions: true,
    filename: `error-${newdate}.log`,
  },
  console: {
    level: 'debug',
    json: false,
    handleExceptions: true,
    colorize: true,
  },
}
const logger = new createLogger({
  format: combine(customLog),
  transports: [
    // Write all logs with level `info` and below to `combined.log`
    // Write all logs with level `error` and below to `error.log`
    new transports.File(options.info),
    new transports.File(options.error),
    new transports.Console(options.console),
  ],
  exitOnError: false,
})

logger.stream = {
  write: (message, _encoding) => {
    logger.info(message)
  },
}

module.exports = logger
