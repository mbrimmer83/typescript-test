import mainContract from '@typescript-test/contracts';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';

const client = initTsrReactQuery(mainContract, {
  baseUrl: 'http://localhost:3333',
  baseHeaders: { 'x-app-source': 'ts-rest' },
});

export default client;
export type Client = typeof client;
