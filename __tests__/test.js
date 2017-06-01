import axios from 'axios';
import HTMLParser from 'fast-html-parser';

test('just a random network test',  () => {
  const userAgent = axios.get('https://httpbin.org/user-agent')
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data['user-agent'];
    })
    .catch(error => {
      console.log(error);
    });

  return expect(userAgent).resolves.toMatch(/axios/);
});

test('just a random html parser test',  () => {
  const root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
  const list = root.querySelector('#list');
  return expect(list.rawAttrs).toBe('id="list"');
});
