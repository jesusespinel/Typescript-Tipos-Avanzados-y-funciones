import { addProduct, updatedProduct } from "./product.service";
import {faker} from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['M','S','L', 'XL']),
    color: faker.commerce.color(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    price: parseInt(faker.commerce.price()),
   
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid()
})   

}

console.log(products)

const product = products[0]
updatedProduct(product.id,{
title:"New title",
stock: 80,

})