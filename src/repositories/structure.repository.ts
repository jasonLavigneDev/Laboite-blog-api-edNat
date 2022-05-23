import {DefaultCrudRepository} from '@loopback/repository';
import {Structure, StructureRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StructureRepository extends DefaultCrudRepository<
  Structure,
  typeof Structure.prototype._id,
  StructureRelations
> {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Structure, dataSource);
  }
}
