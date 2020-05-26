import { Category } from '../models/Category.ts';
import { Food } from '../models/food.ts';
import { Unit } from '../models/unit.ts';

// TODO: TEMP
const foods: Food[] = [
  {
    id: 1,
    name: 'Granny Smith Apple',
    category: Category.Fruit,
    price: 4.99,
    unit: Unit.Pound,
    quantity: '4'
  },
  {
    id: 2,
    name: 'Pineapple',
    category: Category.Fruit,
    price: 2.99,
    quantity: '1',
    unit: Unit.Each
  },
  {
    id: 3,
    name: 'Carrot',
    category: Category.Vegetable,
    price: 1.99,
    unit: Unit.Pound,
    quantity: '1'
  }
];

const searchFoodsById = ( id: number ): Food | undefined => {
  return foods.find( e => e.id === id );
}

const searchFoodsByName = ( name: string | undefined, exact: boolean = false ) => {
  let results: Food[];

  if ( name && name !== '' ) {
    if ( exact ) {
      results = foods.filter( f => f.name.toLocaleLowerCase() === name.toLocaleLowerCase() );
    } else {
      results = foods.filter( f => f.name.toLocaleLowerCase().includes( name.toLocaleLowerCase() ) );
    }
  } else {
    results = foods;
  }

  return results;
}

export default {
  searchFoodsById,
  searchFoodsByName
};