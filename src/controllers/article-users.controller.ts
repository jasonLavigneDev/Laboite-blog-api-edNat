import {
  repository, Filter,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Article,
  Users,
} from '../models';
import {ArticleRepository} from '../repositories';

export class ArticleUsersController {
  constructor(
    @repository(ArticleRepository)
    public articleRepository: ArticleRepository,
  ) { }

  @get('/articles/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Article',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.string('id') id: typeof Article.prototype._id,
  ): Promise<Users> {
    return this.articleRepository.user(id);
  }
}
