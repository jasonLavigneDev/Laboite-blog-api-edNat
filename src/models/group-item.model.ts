import {model, property, Entity, belongsTo} from '@loopback/repository';
import {Group} from './group.model';

@model()
export class GroupItem extends Entity {
  @property({
    type: 'string',
  })
  _id: string;

  @property({
    type: 'string',
  })
  name: string;

  constructor(data?: Partial<GroupItem>) {
    super(data);
  }
}

export interface GroupItemRelations {
  // describe navigational properties here
}

export type GroupItemWithRelations = GroupItem & GroupItemRelations;
