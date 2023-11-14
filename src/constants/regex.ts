import { RegexOptions } from '../interfaces/regex.interface';

export const EMAIL_REGEX: RegexOptions = {
  pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
  message:
    'The email format is not correct, add an email like this example: anartz@mugika.com',
};

export const NAME_PACKAGE_REGEX: RegexOptions = {
  pattern: /^([a-z@]{1}[a-z\-\.\\\/0-9]{0,213})+$/,
  message:
    'The project name can only have 214 characters and must start with a lowercase letter or an at sign.',
};

export const WEBPAGE_REGEX: RegexOptions = {
  pattern: /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
  message:
    'The URL format is not correct, please add a URL like: www.anartz-mugika.com',
};
