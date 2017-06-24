/* eslint-disable no-console */
/* global test, expect */
import axios from 'axios';
import HTMLParser from 'fast-html-parser';

test('get youtube video title',  () => {
  const promise = axios.get('https://www.youtube.com/watch?v=NdYWuo9OFAw', {
    responseType: 'text'
  })
    .then((response) => {
      return response.data;
    })
    .then((html) => {
      return HTMLParser.parse(html);
    })
    .then((root) => {
      const title = root.querySelector('#eow-title');
      return title.rawText;
    })
    .catch(error => {
      console.log(error);
    });

  return expect(promise).resolves.toMatch(/Iris/);
});
