import debug from "debug";

const appError = debug('app:error');
const appLog = debug('app:log');

export {
  appError,
  appLog
}