import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: true,
    idInjection: false,
    mongodb: { collection: 'structures' }, // custom names
  },
})
export class Structure extends Entity {
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
  name: string;


  constructor(data?: Partial<Structure>) {
    super(data);
  }
}

export interface StructureRelations {
  // describe navigational properties here
}

export type StructureWithRelations = Structure & StructureRelations;
