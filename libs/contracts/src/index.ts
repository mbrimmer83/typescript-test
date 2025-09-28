import { initContract } from '@ts-rest/core';
import * as z from 'zod';

const c = initContract();

const mainContract = c.router({
  getUserById: {
    method: 'GET',
    path: '/api/user/:userId',
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      200: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
      }),
    },
    summary: 'Get user by id',
  },
});

export type MainContract = typeof mainContract;
export default mainContract;
