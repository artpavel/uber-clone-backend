import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  // all restaurants
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  // create
  createRestaurant(dto: CreateRestaurantDto): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(dto);
    return this.restaurants.save(newRestaurant);
  }

  // update
  updateRestaurant(id: number, data: UpdateRestaurantDto) {
    return this.restaurants.update(id, { ...data });
  }
}
