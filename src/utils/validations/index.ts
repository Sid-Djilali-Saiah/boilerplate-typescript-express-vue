import { Request } from 'express';

export const isValidParams = (_params: string[], _request: Request) => (
  params: string[],
  { body }: Request,
) => params.map(param => !body[param])?.filter(value => value)?.length === 0;

export * from '.';
