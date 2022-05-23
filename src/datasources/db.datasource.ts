import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

let config = {};

try {
  config = {
    url: process.env.MONGO_USER
      ? `mongodb://${encodeURIComponent(
          process.env.MONGO_USER || '',
        )}:${encodeURIComponent(process.env.MONGO_PASSWORD || '')}@${
          process.env.MONGO_HOST
        }:${process.env.MONGO_PORT || 27017}/${
          process.env.MONGO_DATABASE
        }?authSource=${process.env.MONGO_AUTHSOURCE || 'admin'}`
      : `mongodb://${process.env.MONGO_HOST}:${
          process.env.MONGO_PORT || 27017
        }/${process.env.MONGO_DATABASE}`,
    name: 'db',
    connector: 'mongodb',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true,
  };
} catch (err) {
  console.log('! Error while parsing MongoDB configuration !');
  console.log(err);
  process.exit(1);
}

console.log(
  ` - Connecting to MongoDB at ${process.env.MONGO_HOST}:${
    process.env.MONGO_PORT || 27017
  }, database: ${process.env.MONGO_DATABASE}`,
);
if (process.env.MONGO_USER)
  console.log(`   Database user is ${process.env.MONGO_USER}`);

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
