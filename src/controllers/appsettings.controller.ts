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
  
  export class StructureController {
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
      @param.filter(AppSettings) filter?: Filter<AppSettings>,
    ): Promise<AppSettings[]> {
      return this.appSettingsRepository.find(filter);
    }
  

  }
  