import {DefaultCrudRepository} from '@loopback/repository';
import {LegalTexts, LegalTextsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LegalTextsRepository extends DefaultCrudRepository<
  LegalTexts,
  typeof LegalTexts.prototype._id,
  LegalTextsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(LegalTexts, dataSource);
  }
}
