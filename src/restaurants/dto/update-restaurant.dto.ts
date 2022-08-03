import { InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}

// @InputType()
// export class UpdateRestaurantDto {
//   @Field(() => Number)
//   id: number;

//   @Field(() => UpdateRestaurantInputType)
//   data: UpdateRestaurantInputType;
// }
