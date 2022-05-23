import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where,
  } from '@loopback/repository';
  import {
    param,
    get,
    getModelSchemaRef,
  } from '@loopback/rest';
  import {Structure} from '../models';
  import {StructureRepository} from '../repositories';
  
  export class StructureController {
    constructor(
      @repository(StructureRepository)
      public structureRepository : StructureRepository,
    ) {}
  
    @get('/structures/count', {
      responses: {
        '200': {
          description: 'Structure model count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async count(
      @param.where(Structure) where?: Where<Structure>,
    ): Promise<Count> {
      return this.structureRepository.count(where);
    }
  
    @get('/structures', {
      responses: {
        '200': {
          description: 'Array of Structure model instances',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(Structure, {includeRelations: true}),
              },
            },
          },
        },
      },
    })
    async find(
      @param.filter(Structure) filter?: Filter<Structure>,
    ): Promise<Structure[]> {
      return this.structureRepository.find(filter);
    }
  
    @get('/structures/{id}', {
      responses: {
        '200': {
          description: 'Structure model instance',
          content: {
            'application/json': {
              schema: getModelSchemaRef(Structure, {includeRelations: true}),
            },
          },
        },
      },
    })
    async findById(
      @param.path.string('id') id: string,
      @param.filter(Structure, {exclude: 'where'}) filter?: FilterExcludingWhere<Structure>
    ): Promise<Structure | null> {
      return this.structureRepository.findOne({ where : { _id: id } }, filter);
    }
  }
  