import foodService from '../service/food.service.ts';

export const getFoods = ( context: any ) => {
  const response = foodService.getFoods();

  context.response.body = response;
}

export const getFoodById = ( context: any ) => {
  const params = context.params;

  const id = parseInt( params.id );
  if ( isNaN( id ) ) {
    context.response.status = 400;
    return;
  }

  const response = foodService.getFoodById( id );

  if ( response ) {
    context.response.status = 200;
    context.response.body = {
      food: response
    };
  } else {
    context.response.status = 404;
  }
}