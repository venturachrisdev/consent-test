import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

const mock = new axiosMockAdapter(axios);

const agrees = {
  1: {
    id: 1,
    text: 'Receive newsletter',
  },
  2: {
    id: 2,
    text: 'Be shown targeted ads',
  },
  3: {
    id: 3,
    text: 'Contribute to anonymous visit statistics',
  },
};

const consent = [
  {
    name: 'Christian',
    email: 'christian@mail.com',
    agreeTo: [agrees[1], agrees[2], agrees[3]],
  },
];

// POST:  /consents
mock.onPost('/consents').reply((request: any): any => {
  const data = JSON.parse(request.data);
  const body = data.body;
  if (body) {
    body.agreeTo = body.agreeTo.map((id: number) => agrees[id]);
    consent.push(body);
    return [201, { created: true }];
  }
  return [400, {}];
});

// GET: /consents
mock.onGet('/consents').reply(200, {
  consents: consent,
});

export default axios;
