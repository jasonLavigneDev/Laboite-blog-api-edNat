import {DefaultCrudRepository} from '@loopback/repository';
import {Group, GroupRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GroupRepository extends DefaultCrudRepository<
  Group,
  typeof Group.prototype._id,
  GroupRelations
> {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Group, dataSource);
  }
}
