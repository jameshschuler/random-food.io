import { Router } from 'https://deno.land/x/oak/mod.ts';
import { searchFoodsById, searchFoodsByName } from './food.controller.ts';
import { healthcheck } from './healthcheck.ts';

const router = new Router( {
  prefix: '/api/v1/',
  methods: [ 'GET' ]
} );

router.get( 'healthcheck', healthcheck );
router.get( 'food/:name?/:exact?', searchFoodsByName );
router.get( 'food/:id', searchFoodsById );

export default router;