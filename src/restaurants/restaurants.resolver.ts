import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restautants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() dto: CreateRestaurantDto): boolean {
    console.log(dto);
    return true;
  }
}
