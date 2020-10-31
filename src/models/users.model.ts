import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: false,
    mongodb: {collection: 'users'}, // custom names
  },
})
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'number',
    default: 0,
  })
  articlesCount?: number;

  @property({
    type: 'string',
    required: true,
  })
  structure: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
