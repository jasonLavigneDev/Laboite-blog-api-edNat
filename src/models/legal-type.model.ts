import {Model, model, property} from '@loopback/repository';

@model()
export class LegalType extends Model {
  @property({
    type: 'boolean',
    default: false,
  })
  external?: boolean;

  @property({
    type: 'string',
  })
  content?: string;

  @property({
    type: 'string',
  })
  link?: string;


  constructor(data?: Partial<LegalType>) {
    super(data);
  }
}

export interface LegalTypeRelations {
  // describe navigational properties here
}

export type LegalTypeWithRelations = LegalType & LegalTypeRelations;
