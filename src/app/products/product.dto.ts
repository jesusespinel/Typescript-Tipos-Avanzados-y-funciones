import {Product} from "./product.model"

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updtedAt'|'category'>{
    categoryId: string;   
   }

   type example= Pick<Product, 'color' | 'description'>

   export interface updateProductDto extends Partial<CreateProductDto>{

   }

   type example2 = Required<Product>