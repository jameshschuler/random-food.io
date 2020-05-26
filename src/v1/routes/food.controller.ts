import { SearchFoodRequest } from '../models/request/searchFoodRequest.ts';
import foodService from '../service/food.service.ts';

export const searchFoodsById = ( context: any ) => {
  const params = context.params;

  const response = foodService.searchFoodsById( params.id );

  context.response.status = 200;
  context.response.body = {
    food: response
  };
};

export const searchFoodsByName = ( context: any ) => {
  const params = context.params as SearchFoodRequest;

  const response = foodService.searchFoodsByName( params.name, params.exact );

  context.response.status = 200;
  context.response.body = {
    foods: response
  };
};