import { Field, InputType } from '@nestjs/graphql';
import { IGetEntityByIdInput } from '@common/common/interfaces/get-entity-by-id-input.interface';

@InputType()
export class GetHouseByIdInput implements IGetEntityByIdInput {
  @Field()
  id: string;
}
