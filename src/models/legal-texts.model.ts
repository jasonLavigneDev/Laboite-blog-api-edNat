import {Entity, model, property} from '@loopback/repository';
import { LegalType } from './legal-type.model';

@model({
  settings: {
    strict: false,
    idInjection: false,
    mongodb: {collection: 'appsettings'}, // custom names
  },
})
export class LegalTexts extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  _id: string;
  
  @property()
  accessibility: LegalType;

  @property()
  gcu: LegalType;

  @property()
  legal: LegalType;

  @property()
  personalData: LegalType;


  constructor(data?: Partial<LegalTexts>) {
    super(data);
  }
}

export interface LegalTextsRelations {
  // describe navigational properties here
}

export type LegalTextsWithRelations = LegalTexts & LegalTextsRelations;
