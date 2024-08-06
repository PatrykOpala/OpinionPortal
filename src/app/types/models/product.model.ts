import { TypeProduct } from "../enums";

export type Product = {
    id?: number,
    name: string,
    type_product: TypeProduct,
    description: string,
    user_id: string
}

export function returnProductArray(queryArray: any[]): Product[]{
    return queryArray.reduce((query: Product[], nextProduct: Product)=>{
        let pr: Product = {name: nextProduct.name, type_product: nextProduct.type_product, description: nextProduct.description,
            user_id: nextProduct.user_id, id: nextProduct.id};
        query.push(pr);
        return query;
    }, []);
}