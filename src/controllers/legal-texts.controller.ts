import {Filter, repository} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {LegalTexts} from '../models';
import {LegalTextsRepository} from '../repositories';

export class LegalTextsController {
  constructor(
    @repository(LegalTextsRepository)
    public legalTextsRepository : LegalTextsRepository,
  ) {}

  @get('/legal-texts', {
    responses: {
      '200': {
        description: 'Find the document for LegalTexts model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LegalTexts, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findOne(
    @param.filter(LegalTexts) filter?: Filter<LegalTexts>,
  ): Promise<LegalTexts  | null> {
      return await this.legalTextsRepository.findOne(filter);
  }
}
