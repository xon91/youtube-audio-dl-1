import axios from 'axios';

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
