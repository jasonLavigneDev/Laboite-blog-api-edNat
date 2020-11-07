import {
  Filter,
  FilterExcludingWhere,
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {Tags} from '../models';
import {TagsRepository} from '../repositories';

export class TagsControllerController {
  constructor(
    @repository(TagsRepository)
    public tagsRepository : TagsRepository,
  ) {}

  @get('/tags', {
    responses: {
      '200': {
        description: 'Array of Tags model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tags, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tags) filter?: Filter<Tags>,
  ): Promise<Tags[]> {
    return this.tagsRepository.find(filter);
  }

  @get('/tags/{id}', {
    responses: {
      '200': {
        description: 'Tags model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tags, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tags, {exclude: 'where'}) filter?: FilterExcludingWhere<Tags>
  ): Promise<Tags> {
    return this.tagsRepository.findById(id, filter);
  }
}
