import ejs from 'ejs';

export function render(content: any, data: any) {
  return ejs.render(content, data);
}
