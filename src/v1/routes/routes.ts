import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getFoodById, getFoods } from './food.controller.ts';
import { healthcheck } from './healthcheck.ts';

const router = new Router( {
  prefix: '/api/v1/',
  methods: [ 'GET' ]
} );

router.get( 'healthcheck', healthcheck );
router.get( 'food', getFoods );
router.get( 'food/:id', getFoodById );

export default router;