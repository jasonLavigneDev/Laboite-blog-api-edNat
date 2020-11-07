import {DefaultCrudRepository} from '@loopback/repository';
import {Tags, TagsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TagsRepository extends DefaultCrudRepository<
  Tags,
  typeof Tags.prototype._id,
  TagsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Tags, dataSource);
  }
}
