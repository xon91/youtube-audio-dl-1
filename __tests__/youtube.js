/* eslint-disable no-console */
/* global test, expect */
import axios from 'axios';
import HTMLParser from 'fast-html-parser';
import YouTubeIE from 'YouTubeIE';

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

test('get youtube id from url', () => {
  const ie = new YouTubeIE;
  const id = ie.getVideoId('https://www.youtube.com/watch?v=NdYWuo9OFAw');
  return expect(id).toBe('NdYWuo9OFAw');
});

test('bad youtube url', () => {
  const ie = new YouTubeIE;
  const id = ie.getVideoId('https://www.notyoutube.com/watch?v=NdYWuo9OFAw');
  return expect(id).toBeNull();
});
