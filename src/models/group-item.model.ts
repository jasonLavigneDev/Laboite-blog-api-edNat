import {Entity, model, property} from '@loopback/repository';

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

  @property({
    type: 'number',
  })
  type: number;

  constructor(data?: Partial<GroupItem>) {
    super(data);
  }
}

export interface GroupItemRelations {
  // describe navigational properties here
}

export type GroupItemWithRelations = GroupItem & GroupItemRelations;
