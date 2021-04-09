import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ProgramsArgs {
  @Field((type) => Int)
  skip = 0;

  @Field((type) => Int)
  take = 25;
}
