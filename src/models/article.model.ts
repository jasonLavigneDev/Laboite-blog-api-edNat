import {belongsTo, Entity, model, property} from '@loopback/repository';
import {GroupItem} from './group-item.model';
import {Users} from './users.model';

@model({
  settings: {
    strict: true,
    idInjection: false,
    mongodb: {collection: 'articles'}, // custom names
  },
})
export class Article extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  slug?: string;
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'string',
    required: true,
  })
  structure: string;

  @property({
    type: 'boolean',
    default: false,
  })
  markdown?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  draft?: boolean;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
  })
  updatedAt: string;

  @property({
    type: 'number',
    default: 0,
  })
  visits?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tags?: string[];

  @property({
    type: 'string',
    required: true,
  })
  licence?: string;

  @property.array(GroupItem)
  groups?: GroupItem[];

  @belongsTo(() => Users)
  userId: string;

  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
