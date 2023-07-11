export const EMAIL_REGEX = {
    pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
    message: 'The email format is not correct, add an email like this example: anartz@mugika.com'
};

export const NAME_PACKAGE_REGEX = {
    pattern: /^([a-z@]{1}[a-z\-\.\\\/0-9]{0,213})+$/,
    message: 'The project name can only have 214 characters and must start with a lowercase letter or an at sign.'
};

export const WEBPAGE_REGEX = {
    pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/ig,
    message: 'The URL format is not correct, please add a URL like: www.anartz-mugika.com'
}