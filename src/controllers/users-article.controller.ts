import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Users,
  Article,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersArticleController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/articles', {
    responses: {
      '200': {
        description: 'Array of Users has many Article',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Article)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Article>,
  ): Promise<Article[]> {
    return this.usersRepository.articles(id).find(filter);
  }

}
