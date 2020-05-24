import { Category } from './Category.ts';
import { Unit } from './unit.ts';

export interface Food {
    id: number;
    brand?: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    category: Category;
    unit?: Unit;
    origin?: string;
    quantity?: string;
}