require('ts-node/register');

import * as path from 'path'

const BASE_PATH = path.join(__dirname, 'src', 'db');

export default {
  test: {
    client: 'pg',
    connection: 'postgres://username:password@localhost:5432/koa_api_test',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:123@localhost:5432/koa_api',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
}


