import {Client} from '@loopback/testlab';
import {LaboiteBlogBackendApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PingController', () => {
  let app: LaboiteBlogBackendApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /', async () => {
    await client.get('/').expect(200);
  });
});
