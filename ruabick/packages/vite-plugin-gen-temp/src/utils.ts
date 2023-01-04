import fsExtra from 'fs-extra';
import { green } from 'colorette';

export const LOG_PREFIX = '[vue-hooks-plus:gen-temp]';

export const removeFile = (file: string) => {
  fsExtra.remove(file);
  console.log(`${LOG_PREFIX} ${green('remove')}  ${file}`);
};
