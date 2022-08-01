import { Restaurant } from './entities/restaurant.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => Restaurant)
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restautants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
