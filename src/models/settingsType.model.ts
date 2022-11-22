import {belongsTo, Entity, model, property} from '@loopback/repository';

@model()
export class SettingsType {
    @property({
        type: 'boolean',
        required: true,
    })
    external: boolean

    @property({
        type: 'string',
        required: true,
    })
    link: string
    
    @property({
        type: 'string',
        required: true,
    })
    content: string
}