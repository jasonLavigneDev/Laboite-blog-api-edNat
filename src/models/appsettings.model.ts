import {belongsTo, Entity, model, property} from '@loopback/repository';
import {GroupItem} from './group-item.model';
import {SettingsType} from './settingsType.model';
import {Users} from './users.model';

@model({
  settings: {
    strict: true,
    idInjection: false,
    mongodb: {collection: 'appsettings'}, // custom names
  },
})
export class AppSettings extends Entity {
    @property({
        type: 'string',
    })
    _id: string;

  @property({
    type: Entity,
    required: true,
  })
  legal: SettingsType;

  @property({
    type: Entity,
    required: true,
  })
  accessibility: SettingsType;
    
  @property({
    type: Entity,
    required: true,
  })
  gcu: SettingsType;
    
  @property({
    type: Entity,
    required: true,
  })
  personalData: SettingsType;
    

  constructor(data?: Partial<AppSettings>) {
    super(data);
  }
}

export interface AppSettingsRelations {
    // describe navigational properties here
  }
  
export type AppSettingsWithRelations = AppSettings & AppSettingsRelations;
