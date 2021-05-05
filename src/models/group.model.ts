import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: true,
    idInjection: false,
    mongodb: { collection: 'groups' }, // custom names
  },
})
export class Group extends Entity {
  @property({
    type: 'string',
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  slug: string;


  constructor(data?: Partial<Group>) {
    super(data);
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations;
