import {Entity, model, property} from '@loopback/repository';


@model({
  settings: {
    strict: true,
    idInjection: false,
    mongodb: {collection: 'tags'}, // custom names
  },
})
export class Tags extends Entity {
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
  name: string;


  constructor(data?: Partial<Tags>) {
    super(data);
  }
}

export interface TagsRelations {
  // describe navigational properties here
}

export type TagsWithRelations = Tags & TagsRelations;
