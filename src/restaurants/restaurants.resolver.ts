import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  // get all restaurants
  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  // create
  @Mutation(() => Boolean)
  async createRestaurant(
    @Args('input') dto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(dto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // update
  @Mutation(() => Boolean)
  async updateRestaurant(
    @Args('id') id: number,
    @Args('data') data: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(id, data);
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  }
}
