import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where,
  } from '@loopback/repository';
  import {
    param,
    get,
    getModelSchemaRef,
  } from '@loopback/rest';
  import {AppSettings} from '../models';
  import {AppSettingsRepository} from '../repositories';
  
  export class AppSettingsController {
    constructor(
      @repository(AppSettingsRepository)
      public appSettingsRepository : AppSettingsRepository,
    ) {}

    @get('/appsettings', {
      responses: {
        '200': {
          description: 'All appsettings',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(AppSettings, {includeRelations: true}),
              },
            },
          },
        },
      },
    })
    async find(
        @param.filter(AppSettings, {exclude: 'where'}) filter?: FilterExcludingWhere<AppSettings>
    ): Promise<AppSettings | null> {
      return this.appSettingsRepository.findOne({ where : { _id: 'settings' } });
    }
  }
  