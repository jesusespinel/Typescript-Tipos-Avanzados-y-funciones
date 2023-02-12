import { Category } from "../categories/categories.model";
import { BaseModel } from "../base.model";
export type Sizes = 'S' | 'M' | 'L' | 'XL';

//INTERFACE TIENE UN CUERPO
export interface Product extends BaseModel{
    title: string;
    description: string;
    image: string;
    color: string;
    stock: number;
    size?: Sizes;
    price: number;
    isNew: boolean;
    tags: string[]
    category: Category
}
