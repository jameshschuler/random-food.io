import { SearchFoodRequest } from '../models/request/searchFoodRequest.ts';
import foodService from '../service/food.service.ts';

export const searchFoodsByName = ( context: any ) => {
    const request = context.params as SearchFoodRequest;

    const response = foodService.searchFoodsByName( request );

    context.response.status = 200;
    context.response.body = {
        foods: response
    };
};