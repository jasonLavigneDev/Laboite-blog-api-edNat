import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Article, ArticleRelations, Users} from '../models';
import {UsersRepository} from './users.repository';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype._id,
  ArticleRelations
> {

  public readonly user: BelongsToAccessor<Users, typeof Article.prototype._id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(Article, dataSource);
    this.user = this.createBelongsToAccessorFor('user', usersRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
