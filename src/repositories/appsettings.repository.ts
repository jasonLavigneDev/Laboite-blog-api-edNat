import {DefaultCrudRepository} from '@loopback/repository';
import {Structure, StructureRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import { AppSettings, AppSettingsWithRelations } from '../models/appsettings.model';

export class AppSettingsRepository extends DefaultCrudRepository<
  AppSettings,
  typeof AppSettings.prototype._id,
  AppSettingsWithRelations
> {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(AppSettings, dataSource);
  }
}
