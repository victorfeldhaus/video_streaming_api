import knex from 'knex';
import config from './knexfile';

export const knexDb = knex(config.development);


